import React from 'react';
import ReactDOM from 'react-dom';

import Bio from './components/Bio';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Bio fetch={window.fetch.bind(window)} />, wrapper) : false;
