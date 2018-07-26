import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeathe(cityData)
  {
    console.log(cityData);
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }


	render() {
		return (
      <table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
				</tr>
			</thead>
			<tbody>
        {this.props.weather.map(this.renderWeathe)}
      </tbody>
		</table>
    );
	}
}

function mapStateToProps(state)
{
	return {
    weather: state.weather
  };
}
//we pass null bc we dont need any state here
export default connect(mapStateToProps)(WeatherList);

