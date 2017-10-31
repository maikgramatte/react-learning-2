import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/cart';
import GoogleMap from '../components/map';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (weather.main.temp- 273.15));
        const pressure = cityData.list.map(weather => (weather.main.pressure));
        const humidity = cityData.list.map(weather => (weather.main.humidity));
        
        const {lon, lat} = cityData.city.coord;
      
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart units="Deg" data={temps} color="orange" /></td>
                <td><Chart units="hPa" data={pressure} color="red" /></td>
                <td><Chart units="%" data={humidity} color="blue" /></td>
            </tr>    
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                   <tr>
                        <th>
                            City
                        </th>  
                        <th>
                            Temperature (Celsuis)
                        </th>  
                        <th>
                            Pressure (hPa)
                        </th>  
                        <th>
                            Humidity (%)
                        </th>          
                   </tr>     
                </thead>    
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>    
            </table>    
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);