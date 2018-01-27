// main step definitions file
var {Given, Then, When, Before, After} = require('cucumber');

var misbehave = require('./library.js');
var Nightmare = require('nightmare');
var jsonfile = require('jsonfile');
var fs = require('fs');

// will hold nightmare instance
var nightmare = {};


//////////////////
// preparations //
//////////////////
		
	Before(function() {
		console.log('setting up nightmare..')		
		nightmare = Nightmare({ 
			show: false
		});

		// remove failed.json if exists
        fs.exists('failed.json', function(exists) {
                if(exists) {
                        console.log('cleaning temp files');
                        fs.unlink('failed.json');
                }
        });
	});

	Before(function(scenario) {
		this.misbehave = null;
		this.misbehave = misbehave;	
	});
    //
	//After(function(scenario) {
	//	// capture failed scenarios in file
     //   if(scenario.isFailed()){
     //           var file = 'failed.json';
     //           var entry = {scenario: 'failed'};
    //
     //           jsonfile.writeFile(file, entry, function (err) {
     //                   console.log('recording failed scenario');
     //           });
     //   }
	//});

	After(function(){
		nightmare
			.end()
			.then(function () {
    			console.log('nightmare is now closed..');
    		})
	});

//////////////////////////////////////
// Gherking scenario implementation //
//////////////////////////////////////

	Given(/^I visit (.*) website$/, function(domain, callback) {
		this.misbehave.setDomain('http',domain);		
		callback();		
	});	


	Then(/^website title should be "(.*)"$/, function(siteTitle, callback) {

		this.misbehave.assertTitle(siteTitle, nightmare, function(error, assertionResponse){

			// something went wrong at core cucumber department
			if(error){
				callback(new Error(error));
			}		

			if(assertionResponse.success == 'true') {
				callback();			
			} else {
				callback(JSON.stringify(assertionResponse));
			}		
		});		
	});

