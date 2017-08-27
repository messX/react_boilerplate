var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter} = require('react-router-dom');
var MainApp = require('TodoApp')
window['underscore'] = require('underscore')
var store = require('Store')
var {Provider} =  require('react-redux')

ReactDOM.render(
  <Provider store={store}>
    <MainApp/>
  </Provider>
  ,
  document.getElementById('app')
);
