import React from 'react';
import ReactDOM from 'react-dom';
var Iframe = require('./../../../../components/iframe');
var Countdown = require('./../../../../components/countdown');
var Questions = require('./../../../../components/questions');



var renderer=function(){

ReactDOM.render(
  <div className="ui one column doubling grid container">
              <div className="column">
                <div className="ui segment">
                    <div className="ui two column doubling grid container">
                    <div className="column">
                      <div className="ui segment"> DE specific
</div>
                    </div>
                    <div className="column">
                      <div className="ui segment"><Questions campaign={this.props.campaign} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,

  document.getElementById ('youtube')
)
}
//setTimeout (renderer,0); 

/* 
//example 1 iframe: targeting an element with id 'youtube' in the template
var renderer=function(){
ReactDOM.render(
  <div><center><Iframe width='560px' height='300px' frameborder="0" url='https://www.w3schools.com/'/></center></div>,
  document.getElementById ('youtube')
);
}
setTimeout (renderer,0); */


//example more iframes: creating a container element and adding multiple iframes
/*var renderer=function(){
ReactDOM.render(
  <div><center>
  <Iframe width='560px' height='300px' frameborder="0" url='https://www.w3schools.com/'/>
  <Iframe width='560px' height='300px' frameborder="0" url='https://www.youtube.com/embed/gRG5I4K5YRw'/></center></div>,
  document.getElementById ('youtube')
);
}
setTimeout (renderer,0); */

// example jsvascript inject









