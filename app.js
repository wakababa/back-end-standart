const express = require('express')
const app = express()
require("dotenv").config()
const ProcessProduction = require("./process")
const ProcessDev = require("./process.dev")
const PORT  =process.env.NODE_ENV === "PRODUCTION"  ? ProcessProduction.PORT : ProcessDev.PORT

const logger = require("morgan")
const cookieParser = require('cookie-parser');
const UserRoute = require("./Routes/User")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user",UserRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
