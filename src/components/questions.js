import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Questions extends Component {

constructor(props) {
    super(props);
    this.state = 
    {

    question: window._campaign[this.props.campaign].steps.currentSubStep.data.question.text,
    buttons: window._campaign[this.props.campaign].steps.currentSubStep.data.buttons

    };
    

    }

    click(e){

      console.warn (e);
          window._campaign[window.app.props.campaign].functions.setStep ()
          window.app.setState({

               question: window._campaign[window.app.props.campaign].steps.currentSubStep.data.question.text,
               buttons: window._campaign[window.app.props.campaign].steps.currentSubStep.data.buttons

          });
          window._campaign.senseo.functions.renderer()
          console.log (window._campaign[window.app.props.campaign].steps.currentSubStep.data.question.text);
          //var data = window._campaign[window.app.props.campaign].steps.currentSubStep.name.question.text; 
         
        
    }


    render(props) {
    window.app = this;
  //app.render();
  

      
      var ____campaign = this.props.campaign 

      console.warn ('------>>>>>>>><<<<<<<<<<<<<    '+this.state.buttons)
      var btn= [];
      //creating buttons
      for (var k=0; k<this.state.buttons.length;k++){
          btn.push (<button onClick={window.app.click} key={k} className="nextStep ui orange button">{window._campaign[____campaign].steps.currentSubStep.data.buttons[k].buttonText}</button>);
      }

    	//app.state.data = window._campaign[this.props.campaign].steps.currentStep.data[window._campaign[this.props.campaign].steps.currentStep.name][0].question.text;


 return ( 
                	 <div>

                     
                      <br/>
                      {this.state.question}
                      {btn}

                    
                    </div>
                    
                );
    }
}

var renderer = function(){
ReactDOM.render(
  <div><Questions campaign={window.zzz} /></div>,
  document.getElementById("rightColumn")
);
}
setTimeout (renderer,0)



module.exports = Questions;