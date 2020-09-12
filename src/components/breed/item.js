import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './styles';

const BreedItem = ({name, data, navigation}) => {
  const onBreedSelected = useCallback(() => {
    navigation.navigate('gallery', {name});
  }, [navigation, name]);
  return (
    <TouchableOpacity style={Styles.item} onPress={onBreedSelected}>
      <Image
        style={Styles.image}
        source={require('../../assets/images/paw.png')}
      />
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>{name}</Text>
        <View style={Styles.subTitleContainer}>
          {data.map((subBreed) => (
            <Text style={Styles.subtitle}>{subBreed}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreedItem;
