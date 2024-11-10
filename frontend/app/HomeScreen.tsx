import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../App"; // Use named import for types
import Map from '@/components/map/Map';
import NavbarBottom from '@/components/navbar-bottom/Navbar-Bottom';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Map></Map>
      <NavbarBottom></NavbarBottom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1.2,
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1
  }

});

export default HomeScreen;
