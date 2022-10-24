const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');
app.use('/api', routes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
