import React, { Component } from 'react';


class templates extends Component {
  render() {
console.log ('a',window._campaign.settings.template)
	

  	switch (window._campaign.settings.template){
  		case '1block3blocks':
 
    return (

      <div className={window._campaign.settings.template}>
        <h1>Hello {window._campaign.settings.template} </h1>
      </div>
    );
    break; 
  }
}
}




export default templates;


