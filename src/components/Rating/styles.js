import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rating: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,179,62,1)',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 5,
  },
  ratingNum: {
    fontSize: 12,
    fontWeight: '900',
    color: 'white',
    marginRight: 5,
  },
});

export default styles;
