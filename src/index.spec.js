import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './pages/posts';

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(<Posts />, div);
});