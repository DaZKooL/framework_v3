import React, { Component } from 'react';

class Questions extends Component {

constructor(props) {
    super(props);
  }

    render(props) {
      	console.log ('------------------',this.props.campaign);

    	console.log (window._campaign[this.props.campaign].steps.currentStep.data[window._campaign[this.props.campaign].steps.currentStep.name][0].question.text);
    	var title = window._campaign[this.props.campaign].steps.currentStep.name;
    	var data = window._campaign[this.props.campaign].steps.currentStep.data[window._campaign[this.props.campaign].steps.currentStep.name][0].question.text;


    	/*for (var k=0;k<_campaign.data.campaign.length;k++){
	
	for (var props in _campaign.data.campaign[k]) {
      
	_campaign.steps[[k]]= _campaign.data.campaign[k];
	//console.log (_campaign.data)
}*/


  //var campaign = window._campaign.data.campaign;
 

 return ( 
                	<div>
	                    {title}
	                    <br/>
	                    {data}
	                   	
                    </div>
                    
                );
    }
}

module.exports = Questions;