import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import data from '../../helpers/data';
import styles from './style';

const MainScreen = () => {
  const mapRef = React.useRef(null);
  const [markerVisible, setMarkerVisible] = useState(false);

  const [location, setLocation] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [locationInitial, setLocationInitial] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

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
        }}
        onLongPress={e => {
          setLocation({
            longitude: e.nativeEvent.coordinate.longitude,
            latitude: e.nativeEvent.coordinate.latitude,
            longitudeDelta: 0.1,
            latitudeDelta: 0.1,
          });
          setMarkerVisible(true);
        }}
        onUserLocationChange={e =>
          setLocationInitial({
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: locationInitial.latitudeDelta,
            latitude: e.nativeEvent.coordinate.latitude,
            longitudeDelta: locationInitial.longitudeDelta,
          })
        }
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}>
        {data.map((item, index) => {
          return (
            <Marker
              key={index}
              ref={mapRef}
              coordinate={{
                latitude: Number.parseFloat(item.lat, 10),
                longitude: Number.parseFloat(item.lng, 10),
              }}>
              <Callout style={styles.callout}>
                <Text>{item.city}</Text>
              </Callout>
            </Marker>
          );
        })}
        {markerVisible ? (
          <Marker
            // onPress={() => {}}
            coordinate={location}>
            <View style={styles.markerVisibleContainer}>
              <TouchableOpacity >
                <Text style={styles.markerVisibleText}>
                  {'Add New Location'}
                </Text>
              </TouchableOpacity>
              <Icon name="location" size={50} color="red" />
            </View>
          </Marker>
        ) : null}
      </MapView>
    </View>
  );
};

export default MainScreen;
