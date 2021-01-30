import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Evaluation({rating}) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <MaterialCommunityIcons name="star" color={'#f9ca24'} size={15} />
      <MaterialCommunityIcons name="star" color={'#f9ca24'} size={15} />
      <MaterialCommunityIcons name="star" color={'#f9ca24'} size={15} />
      <MaterialCommunityIcons name="star" color={'#f9ca24'} size={15} />
      <MaterialCommunityIcons name="star" color={'#fff'} size={15} />
    </View>
  );
}
