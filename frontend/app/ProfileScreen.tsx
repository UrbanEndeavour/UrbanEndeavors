import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Map from '@/components/map/Map';
import NavbarBottom from '@/components/navbar-bottom/Navbar-Bottom';
import { RootStackParamList } from "../App"; // Use named import for types
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {  
    const navigation = useNavigation<HomeScreenProp>();

    return (
      <View style={styles.container}>
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
  