import logger from "./";

const loggerMock = jest.fn();
jest.spyOn(console, "log");

describe("Logger", () => {
	it("logs when called", () => {
		logger(loggerMock)("hello");

		expect(loggerMock).toHaveBeenCalledWith("hello");
	});

	it("should default to console", () => {
		logger()("hello");

		expect(console.log).toHaveBeenCalledWith("hello");
	});
});
