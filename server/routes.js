/**
* @summary:  Server route logic
*/

const Check = require('./controllers/locationcheck');

module.exports = app => {

  // Handle area check route provided by user
  app.post('/checkarea', Check.areaSearch );

	//Confirm users postcode
	app.get('/checkpostcode', Check.postcodeCheck);


}
