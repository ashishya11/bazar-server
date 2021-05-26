const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");

const port = 9000;  // declaring the port number to the server.
const app = express();

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(shopRoutes);

app.listen(port, () => {
    console.log(`server is running at port:${port}`)
});