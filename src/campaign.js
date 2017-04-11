import React, { Component } from 'react';
import templates from './templates';

var _campaign;
window._campaign = _campaign = _campaign || {};
_campaign.settings = _campaign.settings || {};

// loading data

if (location.href.indexOf ('localhost') > 1){
	// load local json
var data = require('../data.json');

_campaign.settings.debug = true;

if (_campaign.settings.debug) console.info ('*** Campaign data: ', window._campaign);

}else{
	// load service
	//var data = require('http://address.com/data.json');
}
_campaign.data = data;
_campaign.settings.template = data.settings.template;

if (_campaign.settings.debug) console.info ('*** Template: ', _campaign.settings.template);




export default templates;
