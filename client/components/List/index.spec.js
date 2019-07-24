import React from 'react';
import List from './';
import { shallow } from 'enzyme';

const data = { blog: '', location: null, bio: null, publicRepos: 24 };

describe('List component', () => {
	let list;

	beforeEach(() => (list = shallow(<List data={data} />)));

	it('should render a ul', () => {
		expect(list.type()).toEqual('ul');
	});

	it('should render li items', () => {
		expect(list.find('li').length).toEqual(Object.keys(data).length);
	});

	it('should render an li item with the correct text', () => {
		expect(list.childAt(0).text()).toEqual(data.blog);
	});

	it('should render an li item with the correct props', () => {
		const childZeroKey = list.childAt(0).key();

		expect(childZeroKey).toEqual(`0`);
	});
});
