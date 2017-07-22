var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter} = require('react-router-dom');
var Nav = require('Nav')
var Main = require('Main')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav/>
      <Main/>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
