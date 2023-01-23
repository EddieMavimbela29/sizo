require('dotenv').config();
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

//requiring routes
const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//session
app.use(
    require('express-session')({
        secret: 'this is my fifth fullstack',
        resave: false,
        saveUninitialized: false,
    })
);

//routes
app.use('/', indexRoutes);

app.listen(process.env.PORT, function() {
    console.log(`The Server Has Started! at port${process.env.PORT}`);
});