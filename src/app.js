const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});


// Load models
const hospital = require('./models/hospital.model')
const cartao = require('./models/cartao.model')
const vacina = require('./models/vacina.model')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,HEAD,PUT,POST,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-type");
    app.use(cors());
    next();
});

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const cartaoRoutes = require('./routes/cartao-routes');
app.use('/cartao', cartaoRoutes);

const hospitalRoutes = require('./routes/hospital-routes');
app.use('/hospital', hospitalRoutes);

const vacinaRoutes = require('./routes/vacina-routes');
app.use('/vacina', vacinaRoutes);

module.exports = app;