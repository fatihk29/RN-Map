import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import data from '../../helpers/data';

// const locations = [
//   {
//     title: 'Location 1',
//     latitude: 24.86170245,
//     longitude: 67.00310938,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 13,
//   },
//   {
//     title: 'Location 2',
//     latitude: 24.8317098,
//     longitude: 67.00210948,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 19,
//   },
//   {
//     title: 'Location 3',
//     latitude: 24.83073537,
//     longitude: 67.02129903,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 18,
//   },
//   {
//     title: 'Location 4',
//     latitude: 24.8307323,
//     longitude: 67.10113298,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 12,
//   },
//   {
//     title: 'Location 5',
//     latitude: 24.8307999,
//     longitude: 67.0293998,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 2,
//   },
//   {
//     title: 'Location 6',
//     latitude: 24.85072329,
//     longitude: 67.02129803,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 15,
//   },
//   {
//     title: 'Location 7',
//     latitude: 24.84089002,
//     longitude: 67.02122203,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 5,
//   },
//   {
//     title: 'Location 8',
//     latitude: 24.84064338,
//     longitude: 67.031209,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 50,
//   },
//   {
//     title: 'Location 9',
//     latitude: 24.8405889,
//     longitude: 67.04114039,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 54,
//   },
//   {
//     title: 'Location 10',
//     latitude: 24.8505999,
//     longitude: 67.04139399,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 34,
//   },
//   {
//     title: 'Location 11',
//     latitude: 24.85034563,
//     longitude: 67.04111009,
//     markerImage: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png',
//     weight: 21,
//   },
// ];

export default () => {
  const [labelVisible, setLabelVisible] = React.useState(false);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    console.log(labelVisible);
  }, [labelVisible]);

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
                latitude: parseInt(item.lat),
                longitude: parseInt(item.lng),
              }}
              onDragEnd = { e => console.log(e)}>
              <Callout style={{position: 'relative', flex: 1}}>
                <Text>{item.city}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    width: '100%',
    height: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
