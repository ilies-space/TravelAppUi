import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import HorizontalList from '../Components/HorizontalList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBox from '../Components/SearchBox';

export default function Explore() {
  return (
    <View
      style={{
        backgroundColor: '#ecf0f1',
      }}>
      <View
        style={{
          marginVertical: 10,
        }}
      />

      {/* ----------------------------- */}
      <SearchBox />
      {/* ----------------------------- */}
      <View
        style={{
          marginVertical: 5,
        }}
      />
      {/* ----------------------------- */}
      <HorizontalList />
    </View>
  );
}
