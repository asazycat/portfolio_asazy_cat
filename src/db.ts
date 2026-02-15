import mysql, { Connection } from 'mysql2/promise';
let attempts = 0;
let interval: string | number | NodeJS.Timeout | undefined;



 const dbCon = async () => {
    return await mysql.createConnection({
    host: process.env.MYSQLHOST ?? 'localhost',
    user: process.env.MYSQLUSER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? 'kiloloki',
    database: process.env.MYSQLDATABASE ?? 'portfolio'
  })
}

export const db = dbCon().then((res: Connection) => res).catch((err: any) => {
  if(attempts < 6) { interval = (function() {return setInterval(() => {
    attempts++
    dbCon()
  }, attempts * 1000)})()}
  else {
    console.log(err)
    clearInterval(interval)
    return err
  }
})