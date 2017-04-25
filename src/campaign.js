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
 		// loading json file(s);
 		stepManagers.push(<Stepmanager campaign={targetElements[i].id} key={i}/>);
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

 	



 	

} 
// attach the correct stepmanager depending on data attribute on the container. e.g.

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


