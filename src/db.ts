import mysql, { Connection } from 'mysql2/promise';
let attempts = 3;
let interval: string | number | NodeJS.Timeout | undefined;



 const dbCon = async () => {
    return await mysql.createConnection({
    host: process.env.MYSQLHOST ?? 'localhost',
    user: process.env.MYSQLUSER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? 'kiloloki',
    database: process.env.MYSQLDATABASE ?? 'portfolio'
  })
}

export let db = dbCon().then((res: Connection) => {clearTimeout(interval); return res}).catch((err: any) => {
  if(attempts < 4) { interval = (function() {return setTimeout(() => {
    attempts++
    db = dbCon()
    
  }, attempts * 1000)})()}
  else {
    console.log(err)
    clearTimeout(interval)
    return err
  }
})

