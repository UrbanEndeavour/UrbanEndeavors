import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NavbarBottom: React.FC = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("ProfileScreen")}  // This will navigate to the "Home" screen
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 0.10,
      width: '100%',  // Full width for the container
    },
});

export default NavbarBottom;