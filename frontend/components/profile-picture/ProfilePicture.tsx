import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ReactLogo from '../../assets/images/defaulticon.jpg'; // Import the local image

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={ReactLogo} // Directly use the imported image
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
    borderColor: '#808080', // Use a valid color value
  },
});

export default ProfilePicture;
