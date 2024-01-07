import {View, Platform} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Container = ({children, customStyle}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: 'white',
          paddingTop: Platform.OS === 'android' ? insets.top : 0,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        customStyle,
      ]}>
      {children}
    </View>
  );
};

export default React.memo(Container);
