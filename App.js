import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './app/Navigations/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
