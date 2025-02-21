const mysql = require("mysql2");



const db1 = mysql.createConnection({
  host:  "localhost",
  user: "root",
  password:  "Hardik@9311",
  database:"employer",
});

// Connect to Database 1
db1.connect((err) => {
  if (err) {
    console.error("Database 1 connection failed: ", err);
    return;
  }
  console.log("Connected to Databases");
});


module.exports = { db1 };
