import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../Screens/Explore';
import Travel from '../Screens/Travel';
import Saved from '../Screens/Saved';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
        }}
        name="Saved"
        component={Saved}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bag-personal-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Travel"
        component={Travel}
      />
    </Tab.Navigator>
  );
}
