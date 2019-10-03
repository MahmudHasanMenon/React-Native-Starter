import React, { useRef } from 'react';
import MapView from 'react-native-maps';

import styles from '../../styles/HomeScreen';
import CustomMarker from './CustomMarker';

const RecommendationsMap = (props) => {
  const {
    mapRegion, propertiesData, onRegionChange, onMarkerSelect
  } = props;
  const state = mapHooks(props);

  return (
    <MapView.Animated
      region={mapRegion}
      onRegionChange={onRegionChange}
      ref={state.map}
      style={styles.mapContainer}
      zoomEnabled
      zoomControlEnabled
      zoomTapEnabled
      scrollEnabled
      showsCompass
      cacheEnabled
      rotateEnabled
      pitchEnabled
      followsUserLocation={false}
    >
      {
        propertiesData.map(property => (
          <CustomMarker
            property={property}
            key={property._id}
            onCallOutPress={() => onMarkerSelect(property)}
          />
        ))
      }
    </MapView.Animated>
  );
};

const mapHooks = () => {
  const map = useRef();

  return {
    map
  };
};

export default RecommendationsMap;
