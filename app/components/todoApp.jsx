var React = require('react');
var AddTodo = require('AddTodo')
var TodoList = require('TodoList')
var moment = require('moment')


var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: []
    }
  },
  handleAddTodo: function(todoVal){
    console.log("adding todo", todoVal)
    this.setState(
      {
        todos:[
          ...this.state.todos,
          {
            id:this.state.todos.length + 1,
            text:todoVal,
            completed:false,
            createdAt:moment().unix(),
            completedAt:undefined
          }
        ]
      }

    )
    console.log("todos are", this.state.todos);
  },
  render: function(){
    return (
        <div>
          <AddTodo onAddTodo={this.handleAddTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
    )
  }
})


module.exports = TodoApp;
