const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  database:'store',
  user:'myuser',
  password:'owner'
})

connection.query(
  `CREATE TABLE IF NOT EXISTS stores(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    number VARCHAR(50) NOT NULL
  )`,
  function(err,results){
    if (err){
      console.log(err)
    }
    else{
      console.log("Table Created")
    }
    connection.close();
  }
)