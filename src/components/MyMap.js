import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import data from '../api/endpoint/places.json';
import List from '@material-ui/core/List';
import ObjCard from './ObjCard';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 53.9006011,
      lng: 27.55897200000004,
    },
    zoom: 14,
  };

  render() {
    const { lat, lng } = this.props;
    const actualCenter = this.props.updatedCenter || this.props.center;
    console.log('googleMap', actualCenter);
    return (
      <div style={{ height: '95vh', width: '100%', display: 'flex' }}>
        <GoogleMapReact
          center={actualCenter}
          zoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyB29g8dqi6GVHw7FdzJPsU-6XHjDDhzjII',
          }}
        ></GoogleMapReact>
      </div>
    );
  }
}

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      places: [],
      coordinates: {
        lat: null,
        lng: null,
      },
      onChangeCnter: {
        lat: null,
        lng: null,
      },
    };
  }

  updateCenter = center => {
    this.setState((state, props) => {
      return { coordinates: center };
    });
  };

  componentDidMount() {
    fetch(data).then(response =>
      this.setState({ isLoaded: true, places: data })
    );
    setInterval(() => {
      fetch(data);
    }, 3000);
  }

  render() {
    const { places, coordinates } = this.state;
    console.log('changed', coordinates);

    return (
      <div style={{ width: '100%', display: 'flex' }}>
        <GoogleMap
          style={{ width: '67%' }}
          updatedCenter={
            (coordinates.lat && coordinates.lng && coordinates) || null
          }
        />
        <List style={{ width: '33%' }}>
          {places.map((place, i) => (
            <ObjCard
              updateCenter={this.updateCenter}
              lat={place.lat}
              lng={place.lng}
              name={place.name}
              place={place}
              key={i}
              {...place}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default MyMap;
