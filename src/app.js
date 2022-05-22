const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql2 = require('mysql2');
const myConnection = require('express-myconnection');


const app = express();

//import rutas
const depRoute= require('./routes/department');



//config express
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql2,{
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'crud'
}, 'single'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', depRoute);

//statics
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, ()=> {
    console.log('Server ejecutando en puerto 3000')
});