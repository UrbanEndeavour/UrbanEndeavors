import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '../profile-picture/ProfilePicture';

const ProfileTop: React.FC = () => {
    const imageUrl = require('../../assets/images/react-logo.png');
    return (
      <View style={styles.container}>
        <ProfilePicture uri={imageUrl} />
        <Text style={styles.profileContainer}>Hello</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileContainer: {
    flexDirection: 'row',
    height: '20%', // this number is 20% of page height
    padding: 10,
    backgroundColor: 'blue'
  },
  imgNameContainer: {
    flexDirection: 'column',
    flex: 1,
    //paddingRight: 3, // tweak this value
    backgroundColor: 'green'
  },
  statsContainer: {
    flexDirection: 'column',
    flex: 4,
    backgroundColor: 'black'
  }
});

export default ProfileTop;