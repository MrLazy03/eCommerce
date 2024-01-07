import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '..';
import styles from './styles';

const Rating = ({rating}) => {
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNum}>{rating}</Text>
      <Icon type={'AntDesign'} name={'star'} size={14} color={'#ffffff'} />
    </View>
  );
};

export default React.memo(Rating);
