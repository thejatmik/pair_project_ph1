const express = require('express');

const app = express();
const PORT = 3000;

const rootRouter = require('./router/index')

app.set("view engine", "ejs");
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(__dirname + "/public/"));

app.use("/", rootRouter);

app.listen(PORT, () => console.log("Server jalan bang"));