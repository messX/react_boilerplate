var React = require('react');
var {Route,Switch} = require('react-router-dom');
var Weather = require('Weather');
var About = require('About');

var Main = React.createClass({
  render: function () {
    return (
      <Switch>
        <Route exact path="/" component={Weather}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    )
  }
})

module.exports = Main
