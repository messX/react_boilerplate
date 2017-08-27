var addTodoAction = function(text){
  return {
    type:'ADD_TODO',
    text:text
  }
}

var toggleTodo = function(id){
  if(id == undefined)
    return
  console.log("id us", id)
  return {
    type:'TOGGLE_TODO',
    id:id
  }
}

var toggleShowCompleted = function(){
  return {
    type:'SHOW_COMPLETED'
  }
}
var actions = {
  addTodoAction:addTodoAction, toggleTodo:toggleTodo, toggleShowCompleted:toggleShowCompleted
}
module.exports = actions;
