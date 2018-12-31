import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  // just a map function : array:map(function(item){return item*something})
  renderWeather(cityData){
    const name = cityData.city.name;
    const temp = cityData.list.map((item)=>item.main.temp);
    const pres = cityData.list.map((item)=>item.main.pressure);
    const humid = cityData.list.map((item)=>item.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    //the above 2 line of code can also be written in single line as
    // shown in the code below:
    //const {lon, lat} = cityData.city.coord;

    return(
      <tr key={name}>
        {/*passing longitude and latitude of city as props in google maps.*/}
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temp} color="blue" unit="K"/>
        </td>
        <td>
          <Chart data={pres} color="oragne" unit="Hpa"/>
        </td>
        <td>
          <Chart data={humid} color="green" unit="%"/>
        </td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(Hpa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {/*our state contains an array weather and it has various cities
          like this weather [city:{},city{},city{}], here cities keeps adding
          in the array.so we map over each city and get the required data.*/}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//attaching redux(i.e. weather data in the props)
function mapStateToProps(state){
  return{
    weather:state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
