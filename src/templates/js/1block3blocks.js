import React, { Component } from 'react';
var Iframe = require('./../../components/iframe');
var Questions = require('./../../components/questions');

class _1block3blocks extends Component {


constructor(props) {
    super(props);
  }
    render() {
    	
 return ( 

                	<div>
	                    <div className="column">
	                    	<div className="ui text container"> 
	                   			 <p>{ window._campaign[this.props.campaign].data.settings.template}</p>
	                   		 </div> 
	                    </div> 
	                    <br/>
	                    <div className="column">
	                    		<div className="ui text container">
	                    			<h2 className="ui header" id="header">{window._campaign[this.props.campaign].data.settings.name} - {window._campaign[this.props.campaign].data.settings.offerid}</h2>
	                    				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. .</p>
	                    		</div>
	                    </div>
	                    <br/>
	                    
	                    <div id="youtube"></div>
	                    <div className="ui one column doubling grid container">
		                    <div className="column">
							    <div className="ui segment">
							    		Testers gezocht
							    </div>
							  </div>
	                    </div>
	                    <div className="ui one column doubling grid container">
						  <div className="column">
						    <div className="ui segment">
						    		<div className="ui two column doubling grid container">
									  <div className="column">
									    <div className="ui segment"> Content
</div>
									  </div>
									  <div className="column">
									    <div className="ui segment">
									    <Questions campaign={this.props.campaign} />
									    </div>
									  </div>
									</div>
						    </div>
						  </div>
						</div>
						<div className="ui three column doubling grid container">
						  <div className="column">
						    <div className="ui segment">Content</div>
						  </div>
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

module.exports = _1block3blocks;







