/**
 * App.js
 *
 * This component is the framework around the actual pages.
 * It renders the routes that determine what container to display.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

import Welcome from 'containers/Welcome/Welcome';
import LuckyNumber from 'containers/LuckyNumber/LuckyNumber';
import NotFound from 'containers/NotFound/NotFound';

let navStyles = {
  textAlign: 'center'
}

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React Code Challenge"
      defaultTitle="React Code Challenge"
    >
      <meta name="description" content="Step 1: Complete code challenge, Step 2: Interview, Step 3: Plan a trip to somewhere Exotic!, Step 4: Profit!" />
    </Helmet>

    <nav className="ph3 ph5-ns pv4" style={navStyles}>
      <div className="nowrap overflow-x-auto">
        <Link to={`/`} className="link dim gray f5 f4-ns dib mr3" title="User Info">
          Enter User Info
        </Link>
        <Link to={`/lucky`} className="link dim gray f5 f4-ns dib mr3" title="Lucky Number">
          Lucky Number
        </Link>
      </div>
    </nav>

    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/lucky" component={LuckyNumber} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

export default withRouter(App);
