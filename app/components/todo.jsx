var React = require('react');
var moment = require('moment')
var actions = require('actions')

var renderDate = function(completed, createdAt, handleTodoClick){
  if(completed){
    return `Completed on ${moment.unix(createdAt).format("MMM Do YYYY @ h:mm")}`
  }
  else{
    return `Created on ${moment.unix(createdAt).format("MMM Do YYYY @ h:mm")}`
  }
}

var handleNewClick = function(id, handleTodoClick){
  handleTodoClick(id);
}

var Todo = ({id, text, handleTodoClick, completed, createdAt}) =>  (
        <div onClick={()=>handleNewClick(id, handleTodoClick)}>
          <input type="checkbox" checked={completed}/>
          <p>{text}</p>
          <small>{renderDate(completed, createdAt, handleTodoClick)}</small>
        </div>
)

module.exports = Todo
