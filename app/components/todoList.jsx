var React = require('react')
var Todo = require('Todo')
var actions = require('actions')
import { connect } from 'react-redux'

var renderTodos = function(todos, onTodoClick) {
  console.log("main", todos)
  if(todos.length == 0)
  {
    return (
      <p>Nothing to do.</p>
    )
  }
  else{
    return todos.map((todo) =>
        <Todo key={todo.id} {...todo} handleTodoClick={onTodoClick}/>
    )
  }
}

var TodoList = ({todos, onTodoClick})=> (
      <div>
        {renderTodos(todos, onTodoClick)}
      </div>
)

module.exports = TodoList;
