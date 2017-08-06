var React = require('react');

var FilterTodo = React.createClass({
  handleFilter: function(){
    var showCompleted = this.refs.showCompleted.checked;
    this.props.showCompleted(showCompleted);
  },
  render:function(){
    return (
    <div>
      <input type="checkbox" ref="showCompleted" onChange={this.handleFilter} />
      Show Completed
    </div>
  )}
})
module.exports = FilterTodo;
