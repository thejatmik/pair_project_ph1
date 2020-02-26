const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

const sess = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {}
});

const rootRouter = require('./router/index')

app.set("view engine", "ejs");
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(__dirname + "/public/"));
app.use(sess)

app.use("/", rootRouter);

app.listen(PORT, () => console.log("Server jalan bang"));