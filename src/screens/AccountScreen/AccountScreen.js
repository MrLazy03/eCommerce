import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistor} from '../../store';
import {Container, CustomButton, CustomHeader} from '../../components';
import styles from './styles';
import {showMessage} from 'react-native-flash-message';

const AccountScreen = ({}) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      persistor.purge().then(() => {
        showMessage({type: 'success', message: 'Logout Successfully'});
      });
    } catch (error) {}
  };
  return (
    <Container>
      <CustomHeader title={'Profile '} />
      <CustomButton
        onPress={handleLogout}
        title={'LOG OUT'}
        customStyle={{width: '90%', marginVertical: 15}}
      />
    </Container>
  );
};

export default AccountScreen;
