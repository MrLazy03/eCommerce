import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: 380,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {height: '100%', width: '100%'},

  basicDetailContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
    letterSpacing: 0.4,
    marginTop: 6,
    lineHeight: 20,
  },
  optionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingWrapper: {
    marginVertical: 10,
  },
  btnWrapper: {
    width: '100%',
    height: 'auto',
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  offerPrice: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
});

export default styles;
