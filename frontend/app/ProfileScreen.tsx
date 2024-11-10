import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NavbarBottom from '@/components/navbar-bottom/Navbar-Bottom';
import ProfileTop from '@/components/profile-top/ProfileTop';


type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {  
    const navigation = useNavigation<HomeScreenProp>();

    return (
      <View style={styles.container}>
        <ProfileTop></ProfileTop>
        <NavbarBottom></NavbarBottom>
        <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default ProfileScreen;
  