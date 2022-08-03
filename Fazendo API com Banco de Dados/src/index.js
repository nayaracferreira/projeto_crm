const express = require('express');
const app = express();

const router = require('./route/route');
app.use(router);

const cors = require('cors')

require('dotenv-safe').config();

const db = require('./config/database')
db.connect() 

app.use(cors());
app.use(express.json()); // é preciso usar use json para o express saber como usa-lo

module.exports = app
