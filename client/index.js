import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<List fetch={window.fetch.bind(window)} />, wrapper) : false;

// create a react component that fetches data and displays a list
// add fetch logic to component as class for now
// turn it into a redux app.
