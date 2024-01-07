import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 56,
    backgroundColor: 'rgba(42,77,208,1)',
  },
  backIconContainer: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    width: 25,
    height: 25,
    marginEnd: 10,
    padding: 2,
  },
  backIcon: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
  },
  rightIconContainer: {
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 8,
  },
  cartIcon: {
    fontSize: 24,
    alignSelf: 'flex-end',
    color: '#fff',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
