const rob = require('./routes/rob');
const express = require('express');
const moxios = require('moxios');
const request = require('supertest');

const initRob = () => {
	const app = express();
	app.use(rob());
	return app;
};

describe('GET /rob', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	test('It should fetch robmojosix from GitHub', async () => {
		moxios.stubRequest(/api.github.com\/users/, {
			status: 200,
			response: {
				blog: 'https://test.com',
				location: 'London',
				bio: 'Developer, JavaScript',
				public_repos: 39
			}
		});
		const app = initRob();
		await request(app).get('/rob');
		expect(moxios.requests.mostRecent().url).toBe('https://api.github.com/users/robmojosix');
	});
	test('It should 200 and return a transformed version of GitHub response', async () => {
		moxios.stubRequest(/api.github.com\/users/, {
			status: 200,
			response: {
				blog: 'https://test.com',
				location: 'London',
				bio: 'Developer, JavaScript',
				public_repos: 39
			}
		});
		const app = initRob();
		const res = await request(app).get('/rob');
		expect(res.body).toEqual({
			blog: 'https://test.com',
			location: 'London',
			bio: 'Developer, JavaScript',
			publicRepos: 39
		});
	});
});
