const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//Config express.static
app.use(express.static(path.join(__dirname, '../public')))
//SetEngani
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Routes
const routesIndex = require('./routes/index');
const routesDetail = require('./routes/detail');
app.use('/', routesIndex);
app.use('/detail', routesDetail);


app.listen(port, ()=> console.log(`Listening on ${port}`));
