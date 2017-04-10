/**
* @summary:  Server route logic
*/

const Check = require('./controllers/locationcheck');

module.exports = app => {

  // Handle area check route provided by user
  app.post('/checkarea', Check.areaSearch );

  // Handle basic route
  app.get('/', (req,res) => res.send({ "message": "Working" }));

}
