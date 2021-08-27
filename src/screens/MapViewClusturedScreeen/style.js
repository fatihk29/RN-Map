import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '93%',
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
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: 'green',
    backgroundColor: '#ccc',
  },
  infoText: {
    color: 'black',
  },
});

export default styles;
