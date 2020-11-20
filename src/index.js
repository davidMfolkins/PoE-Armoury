import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Ladder from './components/Ladder'
import Character from './components/Character';

ReactDOM.render(
  <React.StrictMode>
    <Ladder />
    <Character />
  </React.StrictMode>,
  document.getElementById('root')
);