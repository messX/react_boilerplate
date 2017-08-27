import { connect } from 'react-redux'
var actions =  require('actions')
import AddTodo from 'AddTodo'


const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (todoVal) => {
      //e.preventDefault();
      //var todoVal = this.refs.todoText.value;
      if (todoVal.length > 0)
      {
        dispatch(actions.addTodoAction(todoVal));
        //this.refs.todoText.value = '';
      }
      else{
        //this.refs.todoText.focus();
      }

    }
  }
}


const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo)

module.exports = AddTodoContainer
