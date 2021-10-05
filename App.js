import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
