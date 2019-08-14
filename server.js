const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3030;
const app = express();
const exphandlebars = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');

app.engine('handlebars', exphandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/', routes);

app.listen(port);