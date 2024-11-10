import React, { useState } from 'react';
import { StyleSheet, View, Text,  ScrollView } from 'react-native';
import MapView, { Marker, Region, Callout } from 'react-native-maps';
import locationsData from './data.json'; // Adjust path if needed

const Map: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null); // State to track selected marker

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

      if (!isNaN(latitude) && !isNaN(longitude)) {
        return {
          name,
          latitude,
          longitude,
          description: locationData.description,
        };
      } else {
        return null; // Skip invalid markers
      }
    }).filter(Boolean); // Filter out null markers
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation={true}>
        {markers.map((marker) => (
          <Marker
            style={styles.markerbox}
            key={marker.name}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.name}
            description={marker.description}
            pinColor={selectedMarker === marker.name ? 'blue' : 'red'} // Change color based on selection
            onPress={() => setSelectedMarker(marker.name)}
          >
            {/* Custom Callout with ScrollView */}
            <Callout style={styles.customCallout}>
              <ScrollView contentContainerStyle={styles.calloutContent}>
                <Text style={{ fontWeight: 'bold' }}>{marker.name}</Text>
                <Text>{marker.description}</Text>
              </ScrollView>
            </Callout>
          </Marker>
        ))}
         {/* Blue Dot for DCC */}
         <Marker coordinate={{ latitude: 42.729356, longitude: -73.679286 }}>
          <View style={styles.blueDot} />
          <Callout>
            <View>
              <Text>Darrin Communications Center (DCC)</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Full width for the container
  },
  titletext: {
    fontWeight: 'bold'
  },
  map: {
    flex: 1,       // Full height of the container
    width: '100%', // Full width of the screen
  },
  markerbox: {
    flex: 0.5,
    width: '5%',
  },
  blueDot: {
    width: 20,      // Adjust size as needed
    height: 20,     // Adjust size as needed
    backgroundColor: '#90D5FF',
    borderRadius: 10, // Half of width/height for a perfect circle
  },
  customCallout: {
    height: 250,  // Adjust the height of the Callout box
    width: 250,   // Adjust the width as needed
    alignItems: 'flex-start', 
  },
  calloutContent: {
    padding: 2,  // Optional padding inside the callout
  },
});

export default Map;
