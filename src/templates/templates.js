import React, { Component } from 'react';
// Template behaviours
var _1block3blocks = require('./js/1block3blocks');
var _2blocks = require('./js/2blocks');
// Common css for all templates
require('./css/common.css');


class templates extends Component {

constructor(props) {
    super(props);
     this.state = {

    };
  }

    render() {

				// check how many json files has been loaded
			    var size = 0, key;

			    for (key in window._campaign) {
			        if (window._campaign.hasOwnProperty(key)) size++;
			   

						// Load specific template js
					// to do: for loop through json objects to load templates in place
					try {
					    require('./css/'+window._campaign[key].data.settings.template+'.css');
					} catch (error) {
				   		console.info('Missing or wrong css template in json data: ', error);
					}
		 
					// Load template js
					try {
					    require('./js/'+window._campaign[key].data.settings.template+'.js');
					} catch (error) {
				   		console.info('Missing or wrong js template in json data: ', error);
					}

		      		// Campaign specific css overwriting css from template
		            try {
					    require('./../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/css/'+ window._campaign[key].data.settings.country +'.css');
						if (window._campaign[key].data.settings.debug) console.info('*** Personalised css:' , './../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/css/'+ window._campaign[key].data.settings.country +'.css');
					} catch (warn) {
				    	console.warn('This campaign has no personalised css. Targeted file: ', './../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/css/'+ window._campaign[key].data.settings.country +'.css', warn);
					}

					// Campaign specific js overwriting js from template
		            try {
					    var Personalised =require('./../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/js/'+ window._campaign[key].data.settings.country +'.js');
						if (window._campaign[key].data.settings.debug) console.info('*** Personalised js:' , './../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/js/'+ window._campaign[key].data.settings.country +'.js');
					} catch (warn) {
				    	console.warn('This campaign has no personalised js. Targeted file: ', './../campaigns/'+ window._campaign[key].data.settings.country +"/"+window._campaign[key].data.settings.name+"_"+window._campaign[key].data.settings.offerid +'/js/'+ window._campaign[key].data.settings.country +'.js', warn);
					}

		        switch (window._campaign[key].data.settings.template) {
		            case '1block3blocks':
		            	 
		                return ( 
		                	<div>
		               <_1block3blocks campaign={key}/> 
		              
		               
		         
		                </div>
		                );
		                 break;
		                  case '2blocks':

		                return (

		                	<_2blocks campaign={key}/>
		                );
		                break;
		                default:
		                return (
		                	<div className="column">
			                	<div className="ui negative message">
			                	<div className="header">Template not found</div>
			                	<p>Template <strong>{window._campaign[key].data.settings.template}</strong> was not found</p>
			                	<p>Please check json data which must contains:
			                	"settings":<br/>
								      {'{'} <br/>
								         "template"{':'} "1block3blocks"<br/>
								      {'}'} <br/>

			                	</p>
			                	</div>
		                	</div>
		                	);
		        }
		    }
 		}
	}


export default templates;
