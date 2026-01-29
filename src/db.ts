import mysql, { Connection } from 'mysql2/promise';

export const db: Promise<Connection> = (async () =>  {
  try{ return await mysql.createConnection({
    host: process.env.MYSQLHOST ?? 'localhost',
    user: process.env.MYSQLUSER ?? 'root',
    password: process.env.MYSQLPASSWORD ?? 'kiloloki',
    database: process.env.MYSQLDATABASE ?? 'portfolio'
}).then((res: any) => {
  console.log(process.env.MYSQLHOST)
  console.log(process.env.MYSQLDATABASE)
  return res
})
  } catch(err: any) {
    console.log(`${err.statusCode}, ${err.message} ---------------`)
    return err
  }
})()

