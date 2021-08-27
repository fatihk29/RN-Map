import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {View, Text} from 'react-native';

import data from '../../helpers/data';
import styles from './style';

const MainScreen = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 39.91987,
          longitude: 32.85427,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map((item, index) => {
          return (
            <Marker
              key={index}
              ref={mapRef}
              coordinate={{
                latitude: parseInt(item.lat, 10),
                longitude: parseInt(item.lng, 10),
              }}>
              <Callout style={styles.callout}>
                <Text>{item.city}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MainScreen;
