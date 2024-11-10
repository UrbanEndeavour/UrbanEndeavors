import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../profile-picture/ProfilePicture';


const NavbarBottom: React.FC = () => {
    const navigation = useNavigation();
    const imageUrl = require('../../assets/images/react-logo.png');
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}  style={styles.profileWrapper}>
          <ProfilePicture uri={imageUrl} />
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 0.10,
      width: '100%',  // Full width for the container
      backgroundColor: '#f8f8f8', // Example background color
      position: 'relative', 
    },
    profileWrapper: {
      position: 'absolute', // Position the wrapper absolutely
      top: 10, // Adjust to move the profile picture up or down as needed
      left: '95%', // Center horizontally
      transform: [{ translateX: -50 }], // Center the profile picture exactly
      zIndex: 10, // Ensure it appears above other content
    },
});

export default NavbarBottom;