import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            EXPLORE
          </Text>
          <View
            style={{
              marginHorizontal: 5,
            }}>
            <MaterialCommunityIcons
              name="chevron-down"
              color={'black'}
              size={22}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: 'green',
            borderRadius: 5,
            position: 'absolute',
            elevation: 2,
            right: 0,
          }}
        />
        <Image
          style={{
            height: 35,
            width: 35,
            borderRadius: 35 / 2,
          }}
          source={require('../assets/iliesOuldmenouer.jpg')}
        />
      </View>
    </View>
  );
}
