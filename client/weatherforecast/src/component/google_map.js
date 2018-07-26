import React, { Component } from 'react';
/* global google */
class GoogleMap extends Component {
  //this only gets called after the component has rendered on the screen
  componentDidMount()
  {
    //Map(arg1, arg2);
    //arg1 -where-on-the-screen-the-map-wants-to-be-embeded
    //optional parameters
    new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render()
  {
    //anywhere else in this component
    //i can refer to this.ref.map
    return (<div id="map" />);
  }
}

export default GoogleMap;