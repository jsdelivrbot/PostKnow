//Import server mordules
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes');

//Middleware
app.use(bodyParser.json({type: '*/*'}));

//Routes
routes(app);

//Page reload fix
app.use('*', (req,res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));

//Server listen
app.listen(3000, () => console.log('Listening on 3000'))
