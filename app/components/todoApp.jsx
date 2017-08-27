var React = require('react');
var AddTodoContainer = require('AddTodoContainer')
var TodoContainer = require('TodoContainer')
var ToggleTodoContainer = require('ToggleTodoContainer')
var moment = require('moment')
var actions = require('actions')

console.log(AddTodoContainer)

var TodoApp = () => (
        <div>
           <AddTodoContainer/>
          <TodoContainer/>
          {/* <ToggleTodoContainer /> */}
        </div>
)


module.exports = TodoApp;
