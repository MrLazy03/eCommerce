import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'black',
  },
  headerTextContainer: {
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputFieldContainer: {
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '90%',
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 40,
    paddingVertical: 60,
  },
  signButtonContainer: {
    width: '100%',
    marginTop: 40,
  },
});

export default styles;
