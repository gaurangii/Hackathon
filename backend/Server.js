const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db1, db2 } = require("./dbConfig");
const demo = require("./demo");



const app = express();
const PORT =  9090;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", demo);

// Sample Route to Fetch Data from Both Databases
// app.get("/data", (req, res) => {
//   db1.query("SELECT * FROM table1", (err, result1) => {
//     if (err) return res.status(500).json({ error: err });

//     db2.query("SELECT * FROM table2", (err, result2) => {
//       if (err) return res.status(500).json({ error: err });

//       res.json({ database1: result1, database2: result2 });
//     });
//   });
// });

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
