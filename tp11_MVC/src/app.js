const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//Folders Static
app.use(express.static(path.join(__dirname, '../public')));
//Routes
const routesIndex = require('./routes/index');
const routesAbout = require('./routes/about');
//app.get('/', (req,res)=>res.send("hola"))
app.use('/', routesIndex);
app.use('/about', routesAbout);
app.listen(port, ()=> console.log(`listening on port ${port}`));
