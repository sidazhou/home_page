// require(''); // somehow this is necessary, why?! Otherwise we get: "SyntaxError: Unexpected token import"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppController from './components/AppController.jsx';
import AboutMe from './components/AboutMe.jsx';
import ContactMe from './components/ContactMe.jsx';

// tap plugin for material ui, remove upon release of react 1.x
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const PageNotFound = React.createClass({
  render() {
    return (
      <div>
        <p>HTML ERROR 404</p>
      </div>
    );
  },
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppController}>
      <IndexRoute component={AboutMe}/>
      <Route path="/about" component={AboutMe} />
      <Route path="/contact" component={ContactMe} />
      {/*
      <Route path="/project/web" component={Widgets1} />
      <Route path="/project/science" component={Widgets1} />
      */}
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>, document.getElementById('react_entry_point'));
