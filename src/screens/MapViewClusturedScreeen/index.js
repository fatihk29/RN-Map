import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import MapView from 'react-native-map-clustering';
import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomizedMarkerLabel from '../../components/CustomizedMarkerLabel';
import data from '../../helpers/data';
import data2 from '../../helpers/data2';
import styles from './style';

const initialRegion = {
  latitude: 39.91987,
  longitude: 32.85427,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function renderClusteredMarkers() {
  return data.map((item, index) => (
    <Marker
      key={index}
      coordinate={{
        latitude: Number.parseFloat(item.lat),
        longitude: Number.parseFloat(item.lng),
      }}>
      <Callout style={styles.callout}>
        <CustomizedMarkerLabel item={item} />
      </Callout>
    </Marker>
  ));
}
const MapViewClustered = () => {
  const [markerVisible, setMarkerVisible] = useState(false);
  const [location, setLocation] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  React.useEffect(() => {}, []);

  // city: 'Yalıhüyük',
  // lat: '37.3008',
  // lng: '32.0855',
  // country: 'Turkey',
  // iso2: 'TR',
  // admin_name: 'Konya',
  // capital: 'minor',
  // population: '',
  // population_proper: '',
  // },

  const onPress = () => {
    Alert.alert('New Location', 'will be added', [
      {
        text: 'Cancel',
        onPress: () => {
          setMarkerVisible(false);
          console.log('Cancel Pressed');
        },
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setMarkerVisible(false);
          console.log('ok Pressed', location);
          data.push({
            city: 'xx',
            lat: `${location.latitude}`,
            lng: `${location.longitude}`,
            country: 'Turkey',
            iso2: 'TR',
            admin_name: 'Not knowing',
            capital: 'minor',
            population: '',
            population_proper: '',
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        onLongPress={e => {
          setLocation({
            longitude: e.nativeEvent.coordinate.longitude,
            latitude: e.nativeEvent.coordinate.latitude,
            longitudeDelta: 0.1,
            latitudeDelta: 0.1,
          });
          setMarkerVisible(true);
        }}>
        {renderClusteredMarkers()}
        {markerVisible ? (
          <Marker
            onPress={() => {
              onPress();
            }}
            coordinate={location}>
            <View style={styles.markerVisibleContainer}>
              <TouchableOpacity>
                <Text style={styles.markerVisibleText}>
                  {'Add New Location'}
                </Text>
              </TouchableOpacity>
              <Icon name="location" size={50} color="#052" />
            </View>
          </Marker>
        ) : null}
      </MapView>
      {markerVisible ? (
        <View style={styles.info}>
          <Icon name="information-circle" size={25} color="black" />
          <Text style={styles.infoText}>To Add New Location Click</Text>
          <Icon name="location" size={27} color="#052" />
        </View>
      ) : null}
    </View>
  );
};

export default MapViewClustered;
