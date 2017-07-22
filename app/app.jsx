var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Weather = require('Weather');
var About = require('About');
var Home = require('Home');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="weather" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
