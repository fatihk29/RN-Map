import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-map-clustering';

import {Marker, Callout} from 'react-native-maps';
import CustomizedLabel from '../../components/CustomizedLabel';
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
        latitude: Number.parseFloat(item.lat),
        longitude: Number.parseFloat(item.lng),
      }}>
      <Callout style={styles.callout}>
        <CustomizedLabel item={item} />
      </Callout>
    </Marker>
  ));
}
const MapViewClustered = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {renderRandomMarkers()}
      </MapView>
    </View>
  );
};

export default MapViewClustered;
