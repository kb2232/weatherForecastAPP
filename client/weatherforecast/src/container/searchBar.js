import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../action/index';
import '../App.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}
	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		//after submitting - it will be empty
		this.setState({ term: '' });
	}
	render() {
		return (
			<div className="col-md-12">
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						placeholder="Get a five-day forecast in your favorite cities"
						className="form-control Input"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({ fetchWeather }, dispatch);
}
//we pass null bc we dont need any state here
export default connect(null, mapDispatchToProps)(SearchBar);
