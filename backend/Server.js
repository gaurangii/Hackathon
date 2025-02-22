const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db1} = require("./dbConfig");
const employer_pdf_file = require("./employer_pdf_file");



const app = express();
const PORT =  9090;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/pdf", employer_pdf_file);


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
