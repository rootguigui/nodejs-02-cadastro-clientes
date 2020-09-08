const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const { connectionToDatabase } = require('./database');

const port = process.env.PORT || 8080;

connectionToDatabase()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, console.log(`Server Connected to port: ${port}`));

