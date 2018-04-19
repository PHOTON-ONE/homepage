import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			logo: props.logo
		}
	}

	render() {
		return 	<div className="header">
					
						<img className="logo" src={this.state.logo} />
					
				</div>;
	}
}

export default Header;