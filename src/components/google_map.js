//we made this as a component and not a container bcoz it has nothing to do
//with the app state or redux.
import React, {Component} from 'react';

// No need to import separate module to use google maps, look at the src/index.js
// file it has google maps api in <script> tag.
// you also need to give the size of google map in css style sheet as google
// map have on idea what size to show.
class GoogleMap extends Component{
  //this is way google map is integrated in react app.
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      //this is zoom label for google map.
      zoom: 12,
      //this property center the google map in
      // provided latitude and longitude.
      // thus lat and lon is passed as props.
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return <div ref="map" />;
  }
}

export default GoogleMap;
