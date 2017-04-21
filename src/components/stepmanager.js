import React, { Component } from 'react';

class Stepmanager extends Component {

constructor(props) {
    super(props);
  }
  

    render(props) {

    	console.log ('----------********--------'+this.props.url);
    	//console.log (window._campaign.steps.currentStep.name);
    	//var title = window._campaign.steps.currentStep.name;
    	//var data = window._campaign.steps.currentStep.data[window._campaign.steps.currentStep.name][0].question.text;


    	/*for (var k=0;k<_campaign.data.campaign.length;k++){
	
	for (var props in _campaign.data.campaign[k]) {
      
	_campaign.steps[[k]]= _campaign.data.campaign[k];
	//console.log (_campaign.data)
}*/


  //var campaign = window._campaign.data.campaign;
 

 return ( 
                	<div>
                    Here comes the hotstepper
	                    
	                   	
                    </div>
                    
                );
    }
}

module.exports = Stepmanager;