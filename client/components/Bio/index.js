import React from 'react';
import propTypes from 'prop-types';

import List from '../List';

class Bio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bio: {}
		};
	}

	componentDidMount() {
		this.props
			.fetch('http://localhost:3000/rob')
			.then(res => res.json())
			.then(bio => this.setState({ bio }));
	}

	render() {
		return <List data={this.state.bio} />;
	}
}

Bio.propTypes = {
	fetch: propTypes.func
};

export default Bio;
