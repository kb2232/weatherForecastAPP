import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../component/chart';
import GoogleMap from '../component/google_map';

class WeatherList extends Component {
	renderWeathe(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => ((weather.main.temp)*(1.8)-(459.67)));
		const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord;
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temp} color="red" units="F" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="black" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeathe)}</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return {
		weather: state.weather,
	};
}
//we pass null bc we dont need any state here
export default connect(mapStateToProps)(WeatherList);
