import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MINSK_CENTER from '../const/center';

const GoogleMap =  ({ children, ...props}) =>{
  console.log('!!!!'+props);
  return (
  <div style={{ height: '95vh', width: '100%', display: 'flex' }}>
    <GoogleMapReact
    defaultZoom={15}
    defaultCenter={MINSK_CENTER}
 bootstrapURLKeys={{
 key:"AIzaSyB29g8dqi6GVHw7FdzJPsU-6XHjDDhzjII",
      }}

    >
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
 children:  PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
 children:  null,
};

export  default GoogleMap;
