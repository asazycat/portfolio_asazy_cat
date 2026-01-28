import mysql, { Connection } from 'mysql2/promise';

export const db: Promise<Connection> = (async () =>  {
  try{ return await mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'kiloloki',
    database:'portfolio',
    port:3306

}).then((res) => res)
  } catch(err: any) {
    console.log(`${err.statusCode}, ${err.message} ---------------`)
    return err
  }
})()

