import React from 'react';
import {View} from 'react-native';
import Contribute from './Contribute';

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Contribute screen={'Profile'} />
    </View>
  );
}
