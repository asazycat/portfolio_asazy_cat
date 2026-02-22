import mysql from 'mysql2/promise';
let attempts = 1;
let interval: string | number | NodeJS.Timeout | undefined;



 const dbCon = async () => {
    return await mysql.createConnection({
    host: process.env.MYSQLHOST ?? 'localhost',
    user: process.env.MYSQLUSER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? 'kiloloki',
    database: process.env.MYSQLDATABASE ?? 'portfolio'
  })
}

export const db: Promise<mysql.Connection> = (async () => {
  
  try {
      clearTimeout(interval)
      const db = await dbCon()
      
     if(!db) {new Error('Connection failed') } else {
      return db
     }


} catch (err: any) {

    attempts++ 
    if (attempts < 11) {
     interval = (function() {
      return setTimeout(async () => {
        return await dbCon();
      }, attempts * 1000)
    })();
  } else {
    return err
  }


}

})()