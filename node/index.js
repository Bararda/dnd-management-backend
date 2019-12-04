const result = require('dotenv').config({ path: __dirname + "/.env" });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 8080, () => {
    console.log('Server Listening');
});