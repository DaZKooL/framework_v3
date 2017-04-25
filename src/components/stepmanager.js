import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var Iframe = require('./iframe');
var Questions = require('./questions');

class Stepmanager extends Component {

constructor(props) {
    super(props);
  }
  

    render(props) {

    	
var campaign = this.props.campaign;
console.log ('----------STEPMANAGER ********--------'+campaign);
console.log (window._campaign[campaign])


// campaign steps with data
window._campaign[campaign].steps = window._campaign[campaign].steps || {};
window._campaign[campaign].steps.totalSteps = window._campaign[campaign].data.campaign.length-1;
window._campaign[campaign].steps.currentStep = window._campaign[campaign].steps.currentStep || {};
// substeps
window._campaign[campaign].steps.currentSubStep = window._campaign[campaign].steps.currentSubStep || {};
window._campaign[campaign].steps.currentSubStep.number = 0;

// debug: debis debug? console.log will appear in your console
window._campaign[campaign].data.settings = window._campaign[campaign].data.settings || {};
window._campaign[campaign].data.settings.debug = true;

// current step start from first step
window._campaign[campaign].steps.currentStep.number = 0;

// functions
window._campaign[campaign].functions = window._campaign.functions || {};


window._campaign[campaign].functions.setStep = function(step){
//window._campaign[campaign].steps.currentStep.data = 1//window._campaign[campaign].data.campaign[step];
    window._campaign[campaign].steps.currentStep.data = window._campaign[campaign].data.campaign[window._campaign[campaign].steps.currentStep.number];

for (var prop in window._campaign[campaign].steps.currentStep.data) {
      window._campaign[campaign].steps.currentStep.name = prop; 
     //data


      if (window.window._campaign[campaign].data.settings.debug) console.info ('********* step name: ',window._campaign[campaign].steps.currentStep.name);
      if (window.window._campaign[campaign].data.settings.debug) console.info ('********* step number: ',window._campaign[campaign].steps.currentStep.number);
      if (window.window._campaign[campaign].data.settings.debug) console.info ('********* step data: ',window._campaign[campaign].steps.currentStep.data);
    
    }

     if (window._campaign[campaign].steps.currentStep.data[window._campaign[campaign].steps.currentStep.name].length == 0){

            ++window._campaign[campaign].steps.currentStep.number;
            window._campaign[campaign].functions.setStep (window._campaign[campaign].steps.currentStep.number);

            if (window.window._campaign[campaign].data.settings.debug) console.info ('********* skipping step because',window._campaign[campaign].steps.currentStep.name+' it\s empty');

    }else{
        //window._campaign[campaign].steps.currentSubStep.data = window._campaign[campaign].steps.currentStep.data[window._campaign[campaign].steps.currentStep.name][window._campaign[campaign].steps.currentStep.number];
        window._campaign[campaign].steps.totalSubSteps = window._campaign[campaign].steps.currentStep.data[window._campaign[campaign].steps.currentStep.name].length
        console.warn ('TOTAL SUB STEPSSSSSSSSSSSSS    ', window._campaign[campaign].steps.totalSubSteps)
        console.warn ('CURRENT SUB STEPSSSSSSSSSSSSS    ', window._campaign[campaign].steps.currentSubStep.number)
        // if there are still substeps, go to next substep
        if (window._campaign[campaign].steps.currentSubStep.number < window._campaign[campaign].steps.totalSubSteps){
            window._campaign[campaign].steps.currentSubStep.data = window._campaign[campaign].steps.currentStep.data[window._campaign[campaign].steps.currentStep.name][window._campaign[campaign].steps.currentSubStep.number];
            ++window._campaign[campaign].steps.currentSubStep.number;

            console.warn ('---------------->>>>>>>>>>>>>>|||||||     proceeding with substep:', window._campaign[campaign].steps.currentSubStep.number, window._campaign[campaign].steps.currentSubStep.data)
        }else{  // there are no extra substep, going to next step
            // if there are steps, go to next step
            console.warn ('*************')
            console.warn ('******CHECK IF ANY STEP *******', window._campaign[campaign].steps.currentStep.number, window._campaign[campaign].steps.totalSteps)
            console.warn ('*************')

            if (window._campaign[campaign].steps.currentStep.number < window._campaign[campaign].steps.totalSteps){
            window._campaign[campaign].steps.currentSubStep.number = 0;
             ++window._campaign[campaign].steps.currentStep.number;
            window._campaign[campaign].functions.setStep (window._campaign[campaign].steps.currentStep.number); 
            console.warn ('---------------->>>>>>>>>>>>>>|||||||     going to next step:', window._campaign[campaign].steps.currentStep.number+1)
             }else{ // if there are no more steps, end campaign
                alert  ('End of campaign');
                // final action
             }
         }
    
    }       

}


// if there's no data, skip to next step
      

// init with initial step
window._campaign[campaign].functions.setStep (window._campaign[campaign].steps.currentStep.number)
 
window.zzz = this.props.campaign;
console.error (window.zzz);

 return null;
    }
}
window.init = function(){
window._campaign.senseo.functions.renderer = function(){
    console.log ('RENDERERRRRR', window._campaign[window.zzz].steps.currentStep.name)
    switch (window._campaign[window.zzz].steps.currentStep.name){
        case 'questions':
            ReactDOM.render(<Questions campaign={window.zzz} />
            , document.getElementById("rightColumn"));
            break
            case 'overlay':
            ReactDOM.render(<div><center><Iframe width='560px' height='300px' frameborder="0" url='https://www.w3schools.com/'/></center></div>
            , document.getElementById("leftColumn"));
            ReactDOM.render(<div></div>
            , document.getElementById("rightColumn"));
            break
            default:
            <div></div>
            break;
            }
              }
          setTimeout (window._campaign.senseo.functions.renderer , 0)    
          }
setTimeout (window.init, 0)

module.exports = Stepmanager;