import React, {useCallback, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BreedApi from '../../../api/breed';
import BreedList from '../../../components/breed/list';

const BreedScreen = ({navigation, route}) => {
  const [breeds, setBreeds] = useState([]);
  const onRefresh = useCallback(() => {
    BreedApi.fetchBreedList().then((breedArray) => {
      if (breedArray) {
        setBreeds(breedArray);
      }
    });
  }, []);
  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView>
      <BreedList data={breeds} navigation={navigation} />
    </SafeAreaView>
  );
};

export default BreedScreen;
