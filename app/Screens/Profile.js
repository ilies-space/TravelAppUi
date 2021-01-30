import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Contribute from './Contribute';

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text>profile</Text>
      <Contribute />
    </View>
  );
}
