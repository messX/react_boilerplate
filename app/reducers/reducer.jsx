var moment = require('moment');
var redux = require('redux');
var initState = {
  showCompleted: false,
  todos: []
}
export var MainReducer = (state = initState, action)=>{
  var state = underscore.clone(state);
  var todos = state.todos;
  switch(action.type){
    case 'ADD_TODO':
      var res = [
        ...todos,
        {
          id:todos.length + 1,
          text:action.text,
          completed:false,
          createdAt:moment().unix(),
          completedAt:undefined
        }
      ]
      state.todos = res;
      return state;
    case 'TOGGLE_TODO':
      var id = action.id;
      var newTodos = []
      underscore.each(todos, (todo)=>{
        if(todo.id == id){
          var completed = !todo.completed;
          var completedAt = todo.completed ? moment().unix() : undefined;
          var testTodo = Object.assign({}, todo, {completed:completed, completedAt:completedAt})
        }
        newTodos.push(testTodo)
      })
      var newState = {todos:newTodos, showCompleted:state.showCompleted};
      //console.log("new state", state)
      return newState;
    case 'SHOW_COMPLETED':
      state.showCompleted = true;
      return state;
    default:
      return state;
  }
};

// var MainReducer = redux.combineReducers({
//   visibilityReducers,
// })
//   todosReducer

module.exports = MainReducer;
