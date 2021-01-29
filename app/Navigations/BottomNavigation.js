import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../Screens/Explore';
import Travel from '../Screens/Travel';
import Saved from '../Screens/Saved';
import Profile from '../Screens/Profile';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Travel" component={Travel} />
    </Tab.Navigator>
  );
}
