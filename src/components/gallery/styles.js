import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const size = width / 2;
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    borderColor: 'gray',
    borderWidth: 1,
    width: size,
    height: size,
  },
});

export default styles;
