import React, { Component } from 'react';

class _2blocks extends Component {
    render() {

    		
 return ( 
                	<div>
	                    <div className="column" >
	                    	<div className="ui text container" > 
	                   			 <p> { window._campaign.data.settings.template } </p>
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
						    <div className="ui segment">Content</div>
						  </div>
						  <div className="column">
						    <div className="ui segment">Content</div>
						  </div>
						</div>
						
                    </div>
                    
                );
                
						
                 
			

       
    }
}

module.exports = _2blocks;







