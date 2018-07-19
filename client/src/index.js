import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import routes from './routes';
import './styles/main.scss';

const app = (
  <React.StrictMode>
    <Router>
      <div>{routes()}</div>
    </Router>
  </React.StrictMode>
);

render(app, document.getElementById('root'));
