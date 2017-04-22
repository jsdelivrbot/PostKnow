//Import server mordules
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./server/config');
const app = express();
const routes = require('./server/routes');

// Declare static path
app.use(express.static(path.join(__dirname, 'client', 'dist')));

//Middleware
app.use(bodyParser.json({type: '*/*'}));

//Routes
routes(app);

//Page reload fix
app.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

//Server listen
app.listen(config.port, () => console.log('Listening on 3000'))
