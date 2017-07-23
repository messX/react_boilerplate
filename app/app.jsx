var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter} = require('react-router-dom');
var TodoApp = require('TodoApp')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
