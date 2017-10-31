import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherTable from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherTable />
      </div>
    );
  }
}
