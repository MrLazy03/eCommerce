import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomLoader = ({loading}) => {
  if (!loading) return null;
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default CustomLoader;
