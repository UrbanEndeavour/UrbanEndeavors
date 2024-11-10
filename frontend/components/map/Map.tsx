import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import locationsData from './data.json'; // Adjust path if needed

const Map: React.FC = () => {
  const initialRegion: Region = {
    latitude: 42.7284,
    longitude: -73.6918,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Extract and map locations data for markers
  const markers = locationsData.your_root_node.flatMap((item) => {
    return Object.entries(item.Locations).map(([name, locationData]: [string, any]) => {
      const latitude = parseFloat(locationData.Longitude); 
      const longitude = parseFloat(locationData.Latitude);
      
      // Debug log for checking each marker's data
      console.log(`Processing marker: ${name}, Latitude: ${latitude}, Longitude: ${longitude}`);

      if (!isNaN(latitude) && !isNaN(longitude)) {
        return {
          name,
          latitude,
          longitude,
          description: locationData.description,
        };
      } else {
        console.warn(`Invalid coordinates for marker: ${name}`);
        return null; // Skip invalid markers
      }
    }).filter(Boolean); // Filter out null markers
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation={true}>
        {markers.map((marker, index) => (
          <Marker
            key={marker.name}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.name}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Full width for the container
  },
  map: {
    flex: 1,       // Full height of the container
    width: '100%', // Full width of the screen
  },
});

export default Map;
