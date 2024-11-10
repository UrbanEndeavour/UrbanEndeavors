// app/index.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const Index = () => {
  const navigation = useNavigation(); // Hook to use navigation

  const handleNavigation = () => {
    navigation.navigate('HomeScreen'); // Navigate to the "Home" screen
  };

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to App" onPress={handleNavigation} />
    </View>
  );
};

export default Index;
