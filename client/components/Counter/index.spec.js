import React from "react";
import { shallow } from "enzyme";

import Counter from "./";

describe("Counter", () => {
	let counter;

	beforeEach(() => (counter = shallow(<Counter />)));

	it("renders the increment button", () => {
		expect(counter.find(".increment").type()).toEqual("button");
		expect(counter.find(".increment").text()).toEqual("+");
	});

	it("renders the decrement button", () => {
		expect(counter.find(".decrement").type()).toEqual("button");
		expect(counter.find(".decrement").text()).toEqual("-");
	});

	it("renders the counter", () => {
		expect(counter.find(".counter").type()).toEqual("span");
		expect(counter.find(".counter").text()).toEqual("0");
	});

	it("incremenets counter to 1 when + is clicked once", () => {
		counter.find(".increment").simulate("click");

		expect(counter.find(".counter").text()).toEqual("1");
	});

	it("incremenets counter to 3 when + is clicked thrice", () => {
		counter.find(".increment").simulate("click");
		counter.find(".increment").simulate("click");
		counter.find(".increment").simulate("click");

		expect(counter.find(".counter").text()).toEqual("3");
	});

	it("counter remains on 0 when - is clicked once", () => {
		counter.find(".decrement").simulate("click");

		expect(counter.find(".counter").text()).toEqual("0");
	});

	it("counter is 1 when after it is incremented twice and decremented once", () => {
		counter.find(".increment").simulate("click");
		counter.find(".increment").simulate("click");
		counter.find(".decrement").simulate("click");

		expect(counter.find(".counter").text()).toEqual("1");
	});
});
