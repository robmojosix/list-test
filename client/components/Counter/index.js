import React, { useReducer } from "react";

const INCREMENT_ACTION = "INCREMENT";
const DECREMENT_ACTION = "DECREMENT";

const shouldDecrement = counter => counter > 0;
const decrementCounter = count => (shouldDecrement(count) ? count - 1 : 0);

const counterReducer = (state, action) => {
	switch (action) {
		case INCREMENT_ACTION:
			return { counter: state.counter + 1 };
		case DECREMENT_ACTION:
			return { counter: decrementCounter(state.counter) };
		default:
			return {
				counter: state.counter
			};
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

	return (
		<div>
			<span className="counter">{state.counter}</span>
			<button onClick={() => dispatch(INCREMENT_ACTION)} className="increment">
				+
			</button>
			<button onClick={() => dispatch(DECREMENT_ACTION)} className="decrement">
				-
			</button>
		</div>
	);
};

export default Counter;
