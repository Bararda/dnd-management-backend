const result = require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes");
const { serverError } = require("./util/responses");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

//catches any unforseen errors
app.use((err, req, res, next) => {
    if(err) {
        serverError.internalServerError(res, err)
        next(err);
    }
    next();
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server Listening on port ${process.env.PORT || 8080}`);
});
