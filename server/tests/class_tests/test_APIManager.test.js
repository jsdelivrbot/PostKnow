/**
*
* @test: Test module for APImanager class
* 			 1) Basic class initialization tests
*				 2) Date generator and month manipulation tests
*        3) API requests to third party tests
*
*/

const chai = require('chai');
const assert = require('chai').assert;
const TestAPI = require('../../lib/APImanager');


// (1) Basic class initialization tests
describe('@ Object construtor tests', ()=> {

	var testAPI;
	var date;

	beforeEach(() => {
		testAPI = new TestAPI('51.44162', '0.148662');
		date = new Date()
	})

	it('should return an object', ()=> {
		assert.isObject(testAPI, "is an object")
	})

	it('should return construtor coordinates', ()=> {
			testAPI._getCoords().should.equal('54.1123-72.211')
	})


});

// (2) Date generator and month manipulation tests
describe('@ Class generator and date tests', ()=> {

	var testAPI;
	var testAPI_monthMethod;

	beforeEach(() => {
		testAPI = new TestAPI('54.1123', '72.211');
		testAPI_monthMethod = testAPI._monthIDGenerator()
	})


	xit('should generate the correct previous month', (done)=> {
		const correctPreviousDates = ['2017-3', '2017-2', '2017-1', '2016-12']
		for(var i = 0; i < correctPreviousDates; i++){
			var newPrevious = testAPI_monthMethod.next().value;
			newPrevious.should.equal(correctPreviousDates[i]);
		}
		done()
	})


	//Note* : Hardcoded values in this test
	it('should generate previous month', ()=> {
		const dateGen = testAPI_monthMethod;

		assert(dateGen.next().value == '2017-13')
	})

})

describe('@ API requests to external party', ()=> {


})

describe('@ Test', ()=> {

})
