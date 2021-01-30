import React from 'react';
import {Text, View, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function HorizontalList() {
  const listOfCountries = [
    {
      title: 'Algeria',
      imgPath: require('../assets/algeria.jpg'),
    },
    {
      title: 'Asia',
      imgPath: require('../assets/Asia.jpg'),
    },
    {
      title: 'Australia',
      imgPath: require('../assets/australia.jpg'),
    },
    {
      title: 'antarctica',
      imgPath: require('../assets/antarctica.jpg'),
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        keyExtractor={(item) => item.title}
        data={listOfCountries}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 70,
                width: 110,
                backgroundColor: 'red',
                margin: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
              }}>
              <View
                style={{
                  position: 'absolute',
                }}>
                <Image
                  source={item.imgPath}
                  style={{
                    height: 70,
                    width: 110,
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
              <Text
                style={{
                  color: 'white',
                  //   fontWeight: 'bold',
                  fontSize: 21,
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
