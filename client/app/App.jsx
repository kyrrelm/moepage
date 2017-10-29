import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import AppLayout from './layout/AppLayout.jsx';

ReactDOM.render(
  <HashRouter basename="/">
    <Route path="/" component={AppLayout}/>
  </HashRouter>,
  document.getElementById('app')
);
