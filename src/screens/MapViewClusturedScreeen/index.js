import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-map-clustering';

import {Marker, Callout} from 'react-native-maps';
import data from '../../helpers/data';
import styles from './style';

const initialRegion = {
  latitude: 39.91987,
  longitude: 32.85427,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function renderRandomMarkers() {
  return data.map((item, index) => (
    <Marker
      key={index}
      coordinate={{
        latitude: parseInt(item.lat, 10),
        longitude: parseInt(item.lng, 10),
      }}>
      <Callout style={styles.callout}>
        <Text>{item.city}</Text>
      </Callout>
    </Marker>
  ));
}
const MapViewClustered = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {renderRandomMarkers(144)}
      </MapView>
    </View>
  );
};

export default MapViewClustered;
