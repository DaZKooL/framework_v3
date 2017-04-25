import React, { Component } from 'react';

class _2blocks extends Component {

	constructor(props) {
    super(props);
  }
  
    render() {

    		
 return ( 
                	<div>
	                    <div className="column" >
	                    	<div className="ui text container" > 
	                   			  <p>{ window._campaign[this.props.campaign].data.settings.template}</p>
	                   		 </div> 
	                    </div> 
	                    <br/>
	                    <div className="column">
	                    		<div className="ui text container">
	                    			<h2 className="ui header" id="header">Header</h2>
	                    				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. .</p>
	                    		</div>
	                    </div>
	                    <br/>
	                    <div className="ui two column doubling grid container">
						  <div className="column">
						    <div className="ui segment">
								<div id="leftColumn" className="ui segment">
										Left Column
									</div>
							    </div>
						  </div>
						  <div className="column">
						    <div className="ui segment">
								<div id="rightColumn" className="ui segment">
									Right Column
								</div>
						    </div>
						  </div>
						</div>
						
                    </div>
                    
                );
                
						
                 
			

       
    }
}

module.exports = _2blocks;







