import React from 'react';
import propTypes from 'prop-types';

class List extends React.Component {
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
		const bio = this.state.bio;

		console.log('111', bio);

		return (
			<ul>
				{Object.keys(bio).map((key, index) => {
					return <li key={index}>{bio[key]}</li>;
				})}
			</ul>
		);
	}
}

List.propTypes = {
	fetch: propTypes.func
};

export default List;
