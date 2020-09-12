import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 20,
    flexDirection: 'row',
    marginRight: 10,
  },

  titleContainer: {
    marginLeft: 10,
    flex: 1,
  },
  subTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  subtitle: {
    textTransform: 'capitalize',
    padding: 2,
    paddingRight: 4,
    paddingLeft: 4,
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5,
    marginTop: 3,
  },
  image: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
});
export default styles;
