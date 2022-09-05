//Import Dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// create handlebars.js engine object
const hbs = exphbs.create({});

// register the view enging
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// todo: set up middlewear for session, routes, etc.

// Synchronize sequelize DB and start server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});