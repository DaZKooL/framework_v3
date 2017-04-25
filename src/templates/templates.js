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
    	console.warn('-----*****________(((((((((___________')
    	var keys = [];
    	for (var key in window._campaign) {
    		keys.push (key);
    	} 


console.warn ('---------------------------------', keys,'--------------------------------------------------------')
				// check how many json files has been loaded
			    //var size = 0, 
			   
			    for (var k=0; k<keys.length;++k) {
			       k=0;
			        // size++;

console.warn ('--------------------------------***----------', keys[k], k,'-------------****----------------------------------')



						// Load specific template js
					// to do: for loop through json objects to load templates in place
					try {

					    require('./css/'+window._campaign[keys[k]].data.settings.template+'.css');
					} catch (error) {
				   		console.info('Missing or wrong css template in json data: ', error);
					}
		 
					// Load template js
					try {
					    require('./js/'+window._campaign[keys[k]].data.settings.template+'.js');
					} catch (error) {
				   		console.info('Missing or wrong js template in json data: ', error);
					}

		      		// Campaign specific css overwriting css from template
		            try {
		            	console.error ('./../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/css/'+ window._campaign[keys[k]].data.settings.country +'.css');

					    require('./../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/css/'+ window._campaign[keys[k]].data.settings.country +'.css');
						if (window._campaign[keys[k]].data.settings.debug) console.info('*** Personalised css:' , './../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/css/'+ window._campaign[keys[k]].data.settings.country +'.css');
					} catch (warn) {
				    	console.warn('This campaign has no personalised css. Targeted file: ', './../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/css/'+ window._campaign[keys[k]].data.settings.country +'.css', warn);
					}

					// Campaign specific js overwriting js from template
		            try {
					    var Personalised =require('./../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/js/'+ window._campaign[keys[k]].data.settings.country +'.js');
						if (window._campaign[keys[k]].data.settings.debug) console.info('*** Personalised js:' , './../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/js/'+ window._campaign[keys[k]].data.settings.country +'.js');
					} catch (warn) {
				    	console.warn('This campaign has no personalised js. Targeted file: ', './../campaigns/'+ window._campaign[keys[k]].data.settings.country +"/"+window._campaign[keys[k]].data.settings.name+"_"+window._campaign[keys[k]].data.settings.offerid +'/js/'+ window._campaign[keys[k]].data.settings.country +'.js', warn);
					}
				
		        switch (window._campaign[keys[k]].data.settings.template) {
		            case '1block3blocks':
		            	 
		                return ( 
		                	<div>
		               <_1block3blocks campaign={keys[k]}/> 
		              
		               
		         
		                </div>
		                );
		                 break;
		                  case '2blocks':

		                return (

		                	<_2blocks campaign={keys[k]}/>
		                );
		                break;
		                default:
		                return (
		                	<div className="column">
			                	<div className="ui negative message">
			                	<div className="header">Template not found</div>
			                	<p>Template <strong>{window._campaign[keys[k]].data.settings.template}</strong> was not found</p>
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
