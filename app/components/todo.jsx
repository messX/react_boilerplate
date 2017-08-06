var React = require('react');
var moment = require('moment')

var Todo = React.createClass({
  render: function () {
    console.log("todo main", this.props)
    var {id, text, createdAt, completed, completedAt} = this.props;
    var renderDate = function(){
      if(completed){
        return `Completed on ${moment.unix(createdAt).format("MMM Do YYYY @ h:mm")}`
      }
      else{
        return `Created on ${moment.unix(createdAt).format("MMM Do YYYY @ h:mm")}`
      }
    }
    return (
        <div onClick=
          {
            ()=>
              {
                //console.log("clicked", this.props);
                return this.props.onToggle(id);
              }
          }>
          <div><input type="checkbox" checked={completed}/></div>
          <p>{text}</p>
          <small>{renderDate()}</small>
        </div>
    )
  }
})
module.exports = Todo
