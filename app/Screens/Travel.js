import React from 'react';
import {View, Text} from 'react-native';
import Contribute from './Contribute';

export default function Travel() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Contribute screen={'Travel'} />
    </View>
  );
}
