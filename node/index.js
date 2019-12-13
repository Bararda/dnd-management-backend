const result = require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.PORT || 8080, () => {
    console.log("Server Listening");
});
