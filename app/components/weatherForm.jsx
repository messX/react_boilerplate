var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0)
    {
      this.props.onSearch(location)
    }
  },
  render: function () {
    return (
      <div>
        <form>
          <input type="text" ref="location"/>
          <button onClick={this.onFormSubmit}>Get Weather</button>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm
