var axios = require('axios')

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=0cfc2f20c27058c2850facbc6447658d'

var WeatherAPI = {
   getTemp: function(location){
     var encodedParams = encodeURIComponent(location);
     var reqUrl = `${OPEN_WEATHER_URL}&q=${encodedParams}`
     return axios.get(reqUrl)
   }
}

module.exports = WeatherAPI
