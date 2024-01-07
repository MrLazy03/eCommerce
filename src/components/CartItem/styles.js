import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginVertical: 6,
    paddingHorizontal: 0,
    paddingTop: 10,
    borderColor: 'grey',
    elevation: 2,
    borderRadius: 8,
    paddingBottom: 2,
  },
  mainContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  productImage: {
    width: 100,
    height: 120,
  },
  content: {
    flex: 2,
    flexDirection: 'column',
    padding: 4,
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: '100%',
  },
  prodTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },

  offeredPrice: {
    color: 'black',
    fontSize: 20,
    marginTop: 4,
    fontWeight: '800',
  },
  quantity: {
    flexDirection: 'row',
    width: 90,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 6,
    backgroundColor: 'rgba(243, 244,246,1)',
    paddingVertical: 5,
  },
  removeBtn: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
  },
  removeTxt: {
    color: 'rgba(202,58,49,1)',
    fontSize: 16,
    fontWeight: '500',
  },
  horizontalLine: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 4,
  },
});

export default styles;
