import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  priceTag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'rgba(250,250,250,1)',
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tagLeft: {
    flex: 1,
    padding: 4,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  tagRight: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  price: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  },
  txt: {
    color: 'rgba(105,74,180,1)',
    fontSize: 16,
  },
  priceDetailContainer: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginVertical: 6,
    paddingHorizontal: 15,
    paddingTop: 10,
    borderColor: 'grey',
    elevation: 2,
    borderRadius: 8,
    paddingVertical: 10,
  },
  heading: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  horizontalLine: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 4,
  },
});

export default styles;
