import React from 'react';
import ReactDOM from 'react-dom';
import templates from './templates';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<campaign />, div);
});
