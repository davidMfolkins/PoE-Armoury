import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Ladder from './components/Ladder'
import Character from './components/Character';
import Items from './components/Items';

ReactDOM.render(
  <React.StrictMode>
    <Ladder />
    <Character />
    <Items />
  </React.StrictMode>,
  document.getElementById('root')
);