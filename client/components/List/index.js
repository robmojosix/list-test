import React from 'react';
import propTypes from 'prop-types';

const List = ({ data }) => (
	<ul>
		{Object.keys(data).map((key, index) => {
			return <li key={index}>{data[key]}</li>;
		})}
	</ul>
);

export default List;
