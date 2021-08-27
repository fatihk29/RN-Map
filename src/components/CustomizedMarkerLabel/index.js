import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CustomizedMarkerLabel({item}) {
  return (
    <View style={styles.container}>
      <Text>{item.city}</Text>
      <Text>{item.admin_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomizedMarkerLabel;
