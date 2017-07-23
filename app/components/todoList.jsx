var React = require('react')
var Todo = require('Todo')

var TodoList = React.createClass({
  render:function(){
    var todos = this.props.todos;
    console.log("todos", todos)
    var renderTodos = function() {
      if(todos.length == 0)
      {
        return (
          <p>Nothing to do.</p>
        )
      }
      else{
        return todos.map((todo) =>
            <Todo key={todo.id} {...todo}/>
        )
      }
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
