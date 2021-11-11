const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');


//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

//start http server
const httpServer = http.createServer(app);
let port = 18000;
let serviceName = "Fampay"
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);


module.exports = { app };