import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ProfilePicture = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100, // Adjust the size as needed
    height: 100,
    borderRadius: 50, // Half of width/height for a circle
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default ProfilePicture;