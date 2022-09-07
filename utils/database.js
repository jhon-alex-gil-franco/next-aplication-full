import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "rugbhwjnkbptzi",
    password:"6f74843e6a12f69e6bf154b832086a6512a38dfed83a39290044d46036b7f24c",
    host: "ec2-44-210-228-110.compute-1.amazonaws.com",
    port: 5432,
    database: "d403l5i2ua7f5l",
    ssl:  { rejectUnauthorized: false }
   
  });
}


export { conn };
