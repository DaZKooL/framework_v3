import React, { Component } from 'react';

class Iframe extends Component {

constructor(props) {
    super(props);
  }
  
    render(props) {

 return ( 
                	<div>
	                    <iframe width={this.props.width}  height={this.props.height} src={this.props.url} frameborder={this.props.frameborder}></iframe>
                    </div>
                    
                );
    }
}

module.exports = Iframe;