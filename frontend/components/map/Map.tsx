import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const Map: React.FC = () => {
  const initialRegion: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" description="This is a marker" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',  // Full width for the container
  },
  map: {
    flex: 1,        // Full height of the container
    width: '100%',  // Full width of the screen
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
});

export default Map;
