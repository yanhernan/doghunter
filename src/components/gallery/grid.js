import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Styles from './styles';

const Home = ({data}) => {
  return (
    <ScrollView>
      <View style={Styles.grid}>
        {data.map((image) => (
          <Image style={Styles.item} source={{uri: image}} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
