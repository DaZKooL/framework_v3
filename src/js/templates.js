import React, { Component } from 'react';
var _1block3blocks = require('./templates/1block3blocks');
var _2blocks = require('./templates/2blocks');


class templates extends Component {
    render() {

    		// load template css
			try {
			    require('./../css/templates/'+window._campaign.data.settings.template+'.css');
			} catch (error) {
		   		console.info('Missing or wrong css template in json data: ', error);
			} 
 
			// load template js
			try {
			    require('./../js/templates/'+window._campaign.data.settings.template+'.js');
			} catch (error) {
		   		console.info('Missing or wrong js template in json data: ', error);
			}

      		// requires campaign specific css
            try {
			    require('./../css/campaigns/'+ window._campaign.data.settings.offerid+"/"+window._campaign.data.settings.country +'.css');
				if (window._campaign.data.settings.debug) console.info('*** Personalised css:' , './../css/campaigns/'+ window._campaign.data.settings.campaignid+"/"+window._campaign.data.settings.country +'.css');
			} catch (warn) {

		    	console.warn('This campaign has no personalised css. Targeted file: ', './../css/campaigns/'+window._campaign.data.settings.campaignid+'/'+window._campaign.data.settings.country+'.css', warn);
			}
			

        switch (window._campaign.data.settings.template) {
            case '1block3blocks':
            
                return ( 
               <_1block3blocks/>
                );
                 break;
                  case '2blocks':

                return (
                	<_2blocks/>
                );
                break;
                default:
                return (
                	<div className="column">
	                	<div className="ui negative message">
	                	<div className="header">Template not found</div>
	                	<p>Template <strong>{window._campaign.data.settings.template}</strong> was not found</p>
	                	<p>Please check json data which must contains:
	                	"settings":<br/>
						      {'{'} <br/>
						         "template"{':'} "1block3blocks"<br/>
						      {'}'} <br/>

	                	</p>
	                	</div>
                	</div>
                	);
                break;

        }
    }
}




export default templates;
