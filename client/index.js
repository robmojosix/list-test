import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Josh Perez';
const Element = () => <h1>Hello, {name}</h1>;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Element />, wrapper) : false;
