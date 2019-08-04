import React from "react";

import Logger from "../Logger";

export default WrappedCmponent => {
	return class extends React.Component {
		componentDidMount() {
			Logger()("log");
		}

		render() {
			return <WrappedCmponent />;
		}
	};
};
