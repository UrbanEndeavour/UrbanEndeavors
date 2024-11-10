import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import ProfilePicture from '../profile-picture/ProfilePicture';

const ProfileTop: React.FC = () => {  
    return (
    <View style={styles.profileContainer}>
      {/* Profile Picture Container */}
      <View style={styles.imgNameContainer}>
      <ProfilePicture/>
        <Text style={styles.profileTitle}>Jacob Lleonart</Text>
      </View>

      {/* Details Container */}
      <View style={styles.detailsContainer}>
        {/* Upper Container - Text and XP Bar */}
        <View style={styles.upperContainer}>
          <Text style={styles.detailText}>XP Level</Text>
          <View style={styles.xpBarBackground}>
            <View style={styles.xpBarFill} />
          </View>
        </View>

        {/* Lower Container - Text and Integer */}
        <View style={styles.lowerContainer}>
          <Text style={styles.detailText}>Level:</Text>
          <Text style={styles.pointsText}>1234</Text>
        </View>
      </View>
    </View>
  );

  };

const styles = StyleSheet.create({
  
  profileContainer: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    padding: 10,
    height: '20%', // Adjust based on your design
    width: '100%'
  },
  imgNameContainer: {
    flex: 1, // 1/5th of the width
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5
  },
  profileTitle: {
    fontSize: 16,
    color: '808080',
  },
  detailsContainer: {
    justifyContent: 'space-evenly',
    flex: 4, // 4/5ths of the width
    paddingLeft: 20,
  },
  upperContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: '808080',
  },
  xpBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginTop: 5,
  },
  xpBarFill: {
    width: '50%', // Adjust width based on XP level
    height: '100%',
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  pointsText: {
    fontSize: 14,
    color: '808080',
    marginLeft: 5,
  }
  
  /*
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
  },
  */
});

export default ProfileTop;


/*
return (
      <View style={styles.container}>
        <ProfilePicture uri={imageUrl}/>
        <Text style={styles.profileContainer}>Hello</Text>
      </View>
    );
*/