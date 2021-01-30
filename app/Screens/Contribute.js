import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Contribute({screen}) {
  return (
    <View
      style={{
        backgroundColor: '#c7ecee',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          height: 50,
          borderBottomWidth: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          {screen} Screen
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            padding: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            THIS PROJECT IS AN OPEN SOURCE PROJECT YOU CAN{' '}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
          onPress={() => {
            alert('github');
          }}>
          <MaterialCommunityIcons name="github" color={'black'} size={80} />

          <Text
            style={{
              color: '#4834d4',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Contribute
          </Text>
          <Text>github.com/ilies-space</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text>Made with ❤ in Algeria by : ilies Ouldmenouer </Text>
      </View>
    </View>
  );
}
