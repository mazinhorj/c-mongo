const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

const conn = require('./db/conn');

const productRoutes = require('./routes/productsRoutes')

const App = express();

App.engine('handlebars', hbs.engine);

App.set('view engine', 'handlebars');

App.use(
    express.urlencoded({
        extended: true
    })
);

App.use(express.json());

App.use(express.static('public'));

App.use('/products', productRoutes);

App.listen(5500);



