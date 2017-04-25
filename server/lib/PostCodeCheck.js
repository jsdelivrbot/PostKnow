//
// @class: Interface with geocoding API
//

module.exports = class PostCodeCheck {

	constructor(postcode){

	}

}

var moment = require('moment');


var d = new Date();
const log = message => console.log(message);

var year = d.getFullYear();
var month = d.getMonth() + 1;

const BASE_API = 'https://data.police.uk/api/crimes-at-location?date=';


//Return correct current date
//
const getCurrent = () => new Date().getFullYear() + '-' + ( new Date().getMonth() + 1 );

//Go back one month
function goBack(date){
  month = parseInt(date.split('-')[1]);
  if(month == 1){
    return (parseInt(date.split('-')[0]) - 1) + '-12';
  }
  else{
    return date.substring(0,5) + (month - 1);
  }
}

// ------------------------------->

//Generator to hold current month and
function *nextRequest(date){
  let current = date;
  while(true){
    current = goBack(current);
    yield current;
  }
}

const gen = nextRequest(getCurrent());

log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());
log(gen.next());

// --------------------------------->

//Get data until correct one found
const getData = url => {
  return new Promise((resolve,reject) => {
    fetch()
  });
}



//log(getCurrent())

//log(d)
