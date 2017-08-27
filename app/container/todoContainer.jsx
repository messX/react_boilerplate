import { connect } from 'react-redux'
import TodoList from 'TodoList'
var actions =  require('actions')


var getFilteredTodos = function(state){
  var filteredTodos = []
  if(state.showCompleted){
    filteredTodos = underscore.filter(state.todos, function(todo){
      return todo.completed
    })
    return filteredTodos
  }
  else{
    return state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(actions.toggleTodo(id))
    }
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getFilteredTodos(state)
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

module.exports = TodoContainer;
