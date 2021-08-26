import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';

const CustomMarker = ({item}) => {
  return (
    <View style={styles.roundMarker}>
      <Image style={styles.roundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  roundMarker: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  roundImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
