import React from 'react';
import {VirtualizedList} from 'react-native';
import BreedItem from './item';

const itemCount = (data) => {
  return data ? data.length : 0;
};
const getItem = (data, index) => {
  return data[index];
};

const BreedList = ({data, navigation}) => (
  <VirtualizedList
    initialNumToRender={1}
    data={data}
    renderItem={({item}) => <BreedItem {...item} navigation={navigation} />}
    keyExtractor={(item) => item.name}
    getItemCount={itemCount}
    getItem={getItem}
  />
);

export default BreedList;
