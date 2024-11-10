import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfilePicture = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri }} 
        style={styles.profileImage} 
        onError={() => console.log('Failed to load image')} // Log or handle the error
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50, // Adjust the size as needed
    height: 50,
    borderRadius: 25, // Half of width/height for a circle
    borderWidth: 2,
    borderColor: '#808080', // Change to valid color value (with `#`)
  },
});

export default ProfilePicture;
