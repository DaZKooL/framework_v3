import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import templates from './templates/templates';
import Stepmanager from './components/stepmanager';

// main object. To see all data from json file(s), type 
// 					_campaign 
// in your console

var _campaign;
window._campaign = _campaign = _campaign || {};

// checking for json to load. it checks which elements have the data-json attribute.



 	var jsonLength = document.querySelectorAll('[data-json]').length;
 	var targetElements = document.querySelectorAll('[data-json]');
 	var jsonFiles = [];
 	var data;
	var stepManagers = [];
	var _jsonfile;
 	// adding path to json files to load
 	for (var i=0; i< jsonLength; ++i){
 		// all json files to load
 		jsonFiles.push (document.getElementById(targetElements[i].id).dataset.json)
 		console.log (' my bro ---____ ',(targetElements[i].id)) 
 		// loading json file(s);

 		stepManagers.push(<Stepmanager url={jsonFiles[i]} key={i}/>);
 		//console.info ('datazzz   ',data);
		// subobjects of _campaign
		_campaign[document.getElementById((targetElements[i]).id).id] = {};
 		
 		// filling the subobjects
 		
 		_jsonfile = String((jsonFiles[i]));
 		if (location.href.indexOf ('localhost') > 1){
			data = require('./../mockup/main/'+_jsonfile);
		}else{
	//data = require('http://www.domain/data/json'+_jsonfile);
		}
		_campaign[document.getElementById((targetElements[i]).id).id].data=data;
		console.info (_campaign[document.getElementById((targetElements[i]).id).id])

 	



 	
 	//stepManagers+=</div>;


//console.info ()
//data = require(jsonFiles[1]);


//}else{
	// load service
	//var data = require('http://address.com/data.json');
//}
// settings

// raw data

// campaign steps with data
_campaign[targetElements[i].id].steps = _campaign[targetElements[i].id].steps || {};
_campaign[targetElements[i].id].steps.currentStep = _campaign[targetElements[i].id].steps.currentStep || {};
// debug: debis debug? console.log will appear in your console
_campaign[targetElements[i].id].data.settings = _campaign[targetElements[i].id].data.settings || {};
_campaign[targetElements[i].id].data.settings.debug = true;

// current step start from first step
_campaign[targetElements[i].id].steps.currentStep.number = 0;

//data
_campaign[targetElements[i].id].steps.currentStep.data = data.campaign; 
// functions
_campaign[targetElements[i].id].functions = _campaign.functions || {};


_campaign[targetElements[i].id].functions.setStep = function(step){

_campaign[targetElements[i].id].steps.currentStep.data = _campaign[targetElements[i].id].data.campaign[step];
for (var prop in _campaign[targetElements[i].id].steps.currentStep.data) {
      _campaign[targetElements[i].id].steps.currentStep.name = prop; 
      if (window._campaign[targetElements[i].id].data.settings.debug) console.info ('********* step name: ',_campaign[targetElements[i].id].steps.currentStep.name);
      if (window._campaign[targetElements[i].id].data.settings.debug) console.info ('********* step number: ',_campaign[targetElements[i].id].steps.currentStep.number);
      if (window._campaign[targetElements[i].id].data.settings.debug) console.info ('********* step data: ',_campaign[targetElements[i].id].steps.currentStep.data);
      }
      // if there's no data, skip to next step
      if (_campaign[targetElements[i].id].steps.currentStep.data[_campaign[targetElements[i].id].steps.currentStep.name].length < 1){
      if (window._campaign[targetElements[i].id].data.settings.debug) console.info ('********* skipping step because',_campaign[targetElements[i].id].steps.currentStep.name+' it\s empty');

      		++_campaign[targetElements[i].id].steps.currentStep.number;
      		_campaign[targetElements[i].id].functions.setStep (_campaign[targetElements[i].id].steps.currentStep.number);
      }

}

_campaign[targetElements[i].id].functions.setStep (0)
} 
// attach the correct stepmanager depending on data attribute on the container. e.g.

// to do: add two div based on json files 
ReactDOM.render(
    <div>{stepManagers}</div>, 
    document.getElementById('stepmanagers')
);

// init step
//_campaign.functions.setStep (_campaign.steps.currentStep.number);

// template

//if (window._campaign.data.settings.debug) console.info ('*** Campaign data: ', window._campaign);
//if (window._campaign.data.settings.debug) console.info ('*** Template: ', window._campaign.data.settings.template);



export default templates;


