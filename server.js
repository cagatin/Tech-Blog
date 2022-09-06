//Import Dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./routes/index');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// create handlebars.js engine object
const hbs = exphbs.create({});

// create session
const sesh = {
    secret: 'placeholder secret',
    cookie: {},
    resave: false,
    saveUninitiated: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sesh));

// register the view enging
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use(routes);

// Synchronize sequelize DB and start server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});