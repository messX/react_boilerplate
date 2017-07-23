var React = require('react');

var AddTodo = React.createClass({
  handleTodo: function(e){
    e.preventDefault();
    var todoVal = this.refs.todoText.value;
    if (todoVal.length > 0)
    {
      this.props.onAddTodo(todoVal);
      this.refs.todoText.value = '';
    }
    else{
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.handleTodo}>
            <input type="text" ref="todoText" placeholder="What you need to do"/>
            <button>Add Todo</button>
          </form>
        </div>
    )
  }
})
module.exports = AddTodo
