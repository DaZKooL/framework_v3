import React from 'react';
import ReactDOM from 'react-dom';
import Campaign from './campaign';
import '../semantic/dist/semantic.min.css';
import './templates/css/common.css';


var jsonLength = document.querySelectorAll('[data-json]').length;
  var targetElements = document.querySelectorAll('[data-json]');

  
 
  // adding path to json files to load
  for (var i=0; i< jsonLength; ++i){
    ReactDOM.render(
  <Campaign number={i} />,
  document.getElementById(targetElements[i].id)
);

 
    
    
    
   
   
}

/*
ReactDOM.render(
  <Campaign />,
  document.getElementById('senseo')
);*/