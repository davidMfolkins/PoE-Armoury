import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application'

import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
  <BrowserRouter>
    <Application />
  </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);