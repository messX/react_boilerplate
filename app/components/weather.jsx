var React = require('react');
var WeatherForm = require('WeatherForm')
var WeatherMsg = require('WeatherMsg')
var WeatherAPI = require('WeatherAPI')

var Weather = React.createClass({
  getInitialState: () =>(
  {
    'location':'Bangalore',
    'temp':88
  }),
  handleSearch: function(location){
    var that = this;
    console.log("getting Weather for ", location);
    WeatherAPI.getTemp(location).then(
    function (res){
        console.log(res)
        var res = res.data;
        var temp = res.list[0].main.temp
        that.setState({
          'location':location,
          'temp':temp
        })
    },
    function(errorMsg){
      alert(errorMsg)
    })
  },
  render: function () {
    var {temp, location} = this.state
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMsg temp={temp} location={location}/>
      </div>
    )
  }
})

module.exports = Weather
