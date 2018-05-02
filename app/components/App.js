import React from 'react'
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home.js';

export default function App(props) {
  const {err, data} = props;
  return (
    <div>
      <Switch>
        <Route path="/" render={(location) => (<Home data={data} location={location} />)} />
      </Switch>
    </div>
  )
}