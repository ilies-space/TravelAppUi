import React from 'react';
import {View, Text} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBox() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
      <View
        style={{
          // paddingLeft: -30,
          elevation: 1,
          position: 'absolute',
          left: 20,
        }}>
        <MaterialCommunityIcons name="map-search" color={'grey'} size={20} />
      </View>
      <TextInput
        style={{
          height: 50,
          marginHorizontal: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 10,
          paddingLeft: 50,
          flex: 1,
        }}
        placeholder={'Search for destinations'}
      />
    </View>
  );
}
