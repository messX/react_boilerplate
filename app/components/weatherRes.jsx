var React = require('react');

var WeatherMsg = React.createClass({
  render: function (){
    var {temp, location} = this.props;
    return(
      <h2>Its's {temp} in {location}</h2>
    )
  }
})

module.exports = WeatherMsg
