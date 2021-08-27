import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  callout: {
    position: 'relative',
    flex: 1,
  },
  markerVisibleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerVisibleText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
