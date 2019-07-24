import React from 'react';
import Bio from './';
import List from '../List';
import { shallow } from 'enzyme';

const data = {};
const payload = new Promise((res, rej) => res({ json: () => data }));
const mockFetch = jest.fn().mockReturnValue(payload);

describe('Bio component', () => {
	let bio;

	beforeEach(() => (bio = shallow(<Bio fetch={mockFetch} />)));

	it('should render a List component', () => {
		expect(bio.type()).toEqual(List);
	});

	it('should pass data to the List component', () => {
		expect(bio.prop('data')).toEqual(data);
	});
});
