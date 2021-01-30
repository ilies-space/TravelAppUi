import React from 'react';
import {View, Text, Image} from 'react-native';
import Evaluation from './Evaluation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Recommendations() {
  const listOfCountries = [
    {
      title: 'Algeria',
      imgPath: require('../assets/algeria.jpg'),
    },
    {
      title: 'Norway',
      imgPath: require('../assets/norway.jpg'),
    },
    {
      title: 'Seoul',
      imgPath: require('../assets/seoul.jpg'),
    },
    {
      title: 'Maldive',
      imgPath: require('../assets/maldive.jpg'),
    },
  ];
  return (
    <View>
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
          Recommendations
        </Text>
        <Text
          style={{
            color: '#3498db',
            fontWeight: 'bold',
          }}>
          View All
        </Text>
      </View>

      {/* LIST  */}
      <View>
        {listOfCountries.map((elment) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: 'white',
                marginVertical: 5,
                marginHorizontal: 20,
                // alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}
              key={elment.title}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 8,
                    margin: 10,
                  }}
                  source={elment.imgPath}
                />
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    {elment.title}
                  </Text>
                  <Evaluation />
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 40,
                      width: 40,
                      borderRadius: 40 / 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 20,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,

                      elevation: 6,
                    }}>
                    <MaterialCommunityIcons
                      name="bookmark-multiple"
                      color={'#f0932b'}
                      size={22}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
