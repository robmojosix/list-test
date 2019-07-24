import React from 'react';
import List from './';
import { shallow } from 'enzyme';

const bio = { blog: '', location: null, bio: null, publicRepos: 24 };
const payload = new Promise((res, rej) => res({ json: () => bio }));
const mockFetch = jest.fn().mockReturnValue(payload);

describe('List component', () => {
	let list;

	beforeEach(() => (list = shallow(<List fetch={mockFetch} />)));

	it('should render a ul', () => {
		expect(list.type()).toEqual('ul');
	});

	it('should render li list items', () => {
		expect(list.find('li').length).toEqual(Object.keys(bio).length);
	});

	it('should render a list item with the correct title', () => {
		expect(list.childAt(0).text()).toEqual(bio.blog);
	});

	it('should render a list item with the correct props', () => {
		const childZeroKey = list.childAt(0).key();

		expect(childZeroKey).toEqual(`0`);
	});
});
