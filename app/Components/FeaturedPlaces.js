import React from 'react';
import {Text, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function FeaturedPlaces() {
  const listOfCountries = [
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

    {
      title: 'Algeria',
      imgPath: require('../assets/algeria.jpg'),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}>
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
      {/* ---------------- */}
      <View>
        <FlatList
          horizontal
          keyExtractor={(item) => item.title}
          data={listOfCountries}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 220,
                  width: 150,
                  backgroundColor: 'red',
                  margin: 10,
                  borderRadius: 10,
                  //   alignItems: 'center',
                  //   justifyContent: 'center',
                  elevation: 2,
                }}>
                <View
                  style={{
                    position: 'absolute',
                  }}>
                  <Image
                    source={item.imgPath}
                    style={{
                      height: 220,
                      width: 150,
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: 'black',
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      opacity: 0.3,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    margin: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      //   fontWeight: 'bold',
                      fontSize: 21,
                    }}>
                    {item.title}
                  </Text>
                  <Text>evalution</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
