import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HorizontalList from '../Components/HorizontalList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBox from '../Components/SearchBox';
import Header from '../Components/Header';
import FeaturedPlaces from '../Components/FeaturedPlaces';
import Recommendations from '../Components/Recommendations';

export default function Explore() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#ecf0f1',
          flex: 1,
        }}>
        {/* ----------------------------- */}
        <Header />
        {/* ----------------------------- */}
        <SearchBox />
        {/* ----------------------------- */}
        <HorizontalList />
        {/* ----------------------------- */}
        <FeaturedPlaces />
        {/* ----------------------------- */}
        <Recommendations />
      </View>
    </ScrollView>
  );
}
