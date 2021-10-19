const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  database:'store',
  user:'myuser',
  password:'owner'
})

function getAllStores () {

  return new Promise(function (resolve, reject) {
      connection.query(
          `SELECT * FROM stores`,
          function(err, rows, cols) {
              if (err) {
                  reject(err)
              } else {
                  resolve(rows)
              }
          }
      )
  })
}

function addNewStore(NAME, NUMBER, ADDRESS, EMAIL) {

  return new Promise (function(resolve, reject) {
      connection.query(
          `INSERT INTO stores (NAME, NUMBER, ADDRESS, EMAIL) VALUES (?, ?, ?, ?)`,
          [NAME, NUMBER, ADDRESS, EMAIL],
          function(err, results) {
              if (err) {
                  reject(err)
              } else {
                  resolve()
              }
          }
      )
  })
}

exports = module.exports = {
  getAllStores,
  addNewStore
}