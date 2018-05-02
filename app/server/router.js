
import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes.js';
import renderFullPage from './renderFullPage.js';
import App from '../components/App.js';
const perf = require('../services/performance.js')

export default function router(req, res) {
  
  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

  if (!match) {
    res.status(404).send('page not found');
    return;
  }
  const context = {};
  perf.fetchPerformanceData((err, data) => {

    if(err) console.error(err)
    const html = renderToString(
      <StaticRouter context={context} location={req.url} >
        <App data={data}/>
      </StaticRouter>
    );
    res.status(200).send(renderFullPage(html, data));

  })
};