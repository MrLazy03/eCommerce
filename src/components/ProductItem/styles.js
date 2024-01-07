import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
    width: '48%',
    aspectRatio: 0.6,
    marginHorizontal: 4,
    borderColor: 'grey',
    elevation: 1,
    shadowColor: '#fff',
    borderWidth: 0.5,
  },
  prodImageWrapper: {
    flex: 2,
    position: 'relative',
    padding: 4,
  },
  prodImage: {
    width: '100%',
    height: '100%',
  },
  description: {
    flex: 1,
  },
  prodName: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 10,
    paddingHorizontal: 1,
    marginVertical: 8,
    color: 'rgba(0,0,0,0.8)',
  },
  priceRow: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerPrice: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
});

export default styles;
