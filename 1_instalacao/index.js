const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

const conn = require('./db/conn');

const App = express();

App.engine('handlebars', hbs.engine);

App.set('view engine', 'handlebars');

App.use(
    express.urlencoded({
        extended: true
    })
);

App.use(express.json());


App.listen(5500);



