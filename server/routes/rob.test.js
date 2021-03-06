const rob = require('./rob');
const express = require('express');
const moxios = require('moxios');
const request = require('supertest');

const initRob = () => {
	const app = express();
	app.use(rob());
	return app;
};

const mockResponse = {
	blog: 'https://test.com',
	location: 'London',
	bio: 'Developer, JavaScript',
	public_repos: 39
};

const mockParsedResponse = {
	blog: 'https://test.com',
	location: 'London',
	bio: 'Developer, JavaScript',
	publicRepos: 39
};

describe('GET /rob', () => {
	let app;

	beforeEach(() => {
		moxios.install();
		app = initRob();

		moxios.stubRequest(/api.github.com\/users/, {
			status: 200,
			response: mockResponse
		});
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('It should fetch robmojosix from GitHub', async () => {
		await request(app).get('/rob');
		expect(moxios.requests.mostRecent().url).toBe('https://api.github.com/users/robmojosix');
	});

	test('It should 200 and return a transformed version of GitHub response', async () => {
		const res = await request(app).get('/rob');
		expect(res.body).toEqual(mockParsedResponse);
	});
});
