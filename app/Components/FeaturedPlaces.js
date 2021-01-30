import React from 'react';
import {Text, View} from 'react-native';

export default function FeaturedPlaces() {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          flex: 1,
          fontWeight: 'bold',
          fontSize: 17,
        }}>
        Featured places
      </Text>
      <Text
        style={{
          color: '#3498db',
          fontWeight: 'bold',
        }}>
        View All
      </Text>
    </View>
  );
}
