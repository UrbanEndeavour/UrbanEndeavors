import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '../profile-picture/ProfilePicture';

const FriendsList: React.FC = () => {
  
    const imageUrl = require('../../assets/images/react-logo.png');

    return (

        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.title}>Friends List</Text>
            </View>
            
            <View style = {styles.listContainer}>
                <View style = {styles.friendContainer}>
                    <ProfilePicture/>
                    <Text style = {styles.friendName}>Person 1</Text>
                    <Text style = {styles.friendLevel}>Level 9000</Text>
                </View>
                <View style = {styles.friendContainer}>
                    <ProfilePicture/>
                    <Text style = {styles.friendName}>Person 1</Text>
                    <Text style = {styles.friendLevel}>Level 9000</Text>
                </View>
                <View style = {styles.friendContainer}>
                    <ProfilePicture/>
                    <Text style = {styles.friendName}>Person 1</Text>
                    <Text style = {styles.friendLevel}>Level 9000</Text>
                </View>
            </View>

            <View style = {styles.optionsContainer}>
                <Text>Load More</Text>
                <Text>Add Friend</Text>
            </View>
        </View>

    );

  };

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'column',
    height: '55%', // mess around with this
    width: '100%'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },
  title: {
    // title formatting can be done later
  },
  listContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  friendContainer: {
    flexDirection: 'row',
  },

  /* Friend Container items */
  friendPfp: {
    flex: 1,
    right: 10
  },
  friendName: {
    flex: 1,
    paddingLeft: 80
  },
  friendLevel: {
    flex: 1
  },

  optionsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default FriendsList;