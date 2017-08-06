var React = require('react')
var Todo = require('Todo')

var TodoList = React.createClass({
  callHandleToggle: function(id){
    console.log("call handle todo for", this.props);
    this.props.onToggle(id)
  },
  render:function(){
    var todos = this.props.todos;
    var callToggle = this.callHandleToggle;
    //console.log("todos", todos)
    var renderTodos = function() {
      if(todos.length == 0)
      {
        return (
          <p>Nothing to do.</p>
        )
      }
      else{
        return todos.map((todo) =>
            <Todo key={todo.id} {...todo} onToggle={callToggle}/>
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
