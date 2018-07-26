import React, { Component } from 'react';
import SearchBar from './container/searchBar';
import WeatherList from './container/weatherList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
