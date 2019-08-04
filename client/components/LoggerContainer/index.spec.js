import React from "react";
import { shallow } from "enzyme";

import LoggerContainer from "./";

const mockLogger = jest.fn();

jest.mock("../Logger", () => () => mockLogger);

const DummyComponent = () => <div />;
const LoggerContainerWithChild = LoggerContainer(DummyComponent);

describe("LoggerContainer", () => {
	it("should render the wrapped component", () => {
		const componentUnderTest = shallow(<LoggerContainerWithChild />);

		expect(componentUnderTest.type()).toEqual(DummyComponent);
	});

	it("should call the logger when mounted", () => {
		expect(mockLogger).toHaveBeenCalledWith("log");
	});
});
