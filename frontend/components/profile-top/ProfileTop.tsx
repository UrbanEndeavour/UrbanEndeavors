import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '../profile-picture/ProfilePicture';

const ProfileTop: React.FC = () => {
  const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw2zKtJOoYHLR8iGauuj-4EX&ust=1731302113092000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCN3IyB0YkDFQAAAAAdAAAAABAE';
    return (
      <View style={styles.container}>
        <ProfilePicture uri ={imageUrl}> </ProfilePicture>
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