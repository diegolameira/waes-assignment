import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(<Home />, div);
});