import express from 'express';
import request from 'supertest';

import logger from './logger';

const mockLogger = jest.fn();
const mockNext = jest.fn();

const app = express();
const loggerMw = logger(mockLogger);
app.use(loggerMw);

describe('logger middleware', () => {
	it('calls the log method when invoked', async () => {
		await request(app).get('/');

		expect(mockLogger).toHaveBeenCalledWith('logger middleWare');
	});

	it('should call next', () => {
		loggerMw(null, null, mockNext);

		expect(mockNext).toHaveBeenCalled();
	});
});
