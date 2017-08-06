var React = require('react');
var AddTodo = require('AddTodo')
var TodoList = require('TodoList')
var FilterTodo = require('FilterTodo')
var moment = require('moment')


var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
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
    //console.log("todos are", this.state.todos);
  },
  filterTodoList: function(ifShow){
    console.log("if show", ifShow)
    this.setState({
      showCompleted:ifShow
    })

  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id == id)
      {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    })
    //console.log("updated todos", updatedTodos)
    this.setState({todos:updatedTodos})
  },
  getFilteredTodo: function(){
    var filteredTodos = [];
    if(this.state.showCompleted){
      this.state.todos.map(function(todo){
        if(todo.completed){
          filteredTodos.push(todo)
        }
      });
    }
    else{
      filteredTodos = this.state.todos;
    }
    return filteredTodos;
  },
  render: function(){
    var filteredTodos = this.getFilteredTodo();
    return (
        <div>
          <AddTodo onAddTodo={this.handleAddTodo}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <FilterTodo showCompleted={this.filterTodoList} />
        </div>
    )
  }
})


module.exports = TodoApp;
