import templates from './templates';

// main object. To see the full data (debug), type 
// 					_campaign 
// in your console
// campaign id? // type _campaign.settings.campaignid 
var _campaign;
window._campaign = _campaign = _campaign || {};

// loading data

if (location.href.indexOf ('localhost') > 1){
	// load local json
var data = require('./../../data.json');





}else{
	// load service
	//var data = require('http://address.com/data.json');
}
// settings

// data
_campaign.data = data;

// debug: debis debug? console.log will appear in your console
_campaign.data.settings = _campaign.data.settings || {};
_campaign.data.settings.debug = true;

// template

if (window._campaign.data.settings.debug) console.info ('*** Campaign data: ', window._campaign);
if (window._campaign.data.settings.debug) console.info ('*** Template: ', window._campaign.data.settings.template);




export default templates;
