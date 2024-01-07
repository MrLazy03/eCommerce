import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  constainer: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  textInputContainer: {
    alignItems: 'flex-start',
    elevation: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    height: 43,
  },
  label: {
    color: '#333333',
    fontSize: 14,
    marginLeft: 8,
  },
  input: {
    borderRadius: 10,
    textAlign: 'left',
    paddingLeft: 15,
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'justify',
    height: 40,
  },

  eyeIcon: {
    marginRight: 20,
    marginLeft: 5,
  },
  errorText: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default styles;
