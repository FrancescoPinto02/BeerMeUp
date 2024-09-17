const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const helperHbs = require('./models/handlebars-helpers');
const errorHandler = require('./middleware/errorHandler');

// App Express
const app = express();

// Static Directory
app.use(express.static('public'));

// Environment variables
dotenv.config();

// JSON Parsing for HTTP POST (Max 3mb)
app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Session
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true,
}));

// Cookies
app.use(cookieParser());

// makes the BASE_URL available in handlebars` template
app.use((req, res, next) => {
    const { locals } = res;
    locals.BASE_URL = process.env.BASE_URL;
    next();
});

// Handlebars Config
app.engine('hbs', expressHbs.engine({
    layoutsDir: './platform/views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',
    helpers: helperHbs,
    partialsDir: `${__dirname}/platform/views/partials`,
}));
app.set('view engine', 'hbs');
app.set('views', './platform/views');

// Ruoutes
app.get('/', (req, res) => {
    res.redirect('/welcome.html');
});
require('./platform/routes/beer')(app);
require('./platform/routes/shop')(app);
require('./api/routes/beer')(app);

// Error Handler Middleware Config
app.use(errorHandler);

// Run Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`BeerMeUp server listening at http://localhost:${port}`);
});