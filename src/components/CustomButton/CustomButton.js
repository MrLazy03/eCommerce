import {Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import {Icon} from '..';
import styles from './styles';

const CustomButton = ({
  title,
  onPress,
  customStyle,
  buttonType,
  iconType,
  iconName,
  textStyle,
}) => {
  const {colors} = useTheme();

  const renderIcon = () => {
    return (
      <Icon
        type={iconType}
        name={iconName}
        size={20}
        color={colors.buttonIconColor}
        style={{alignSelf: 'center'}}
      />
    );
  };
  const renderText = () => {
    return <Text style={[styles.buttonText, textStyle]}>{title}</Text>;
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: pressed
            ? 'rgba(42,77,208,0.8)'
            : 'rgba(42,77,208,1)',
        },
        customStyle,
      ]}
      onPress={onPress}>
      {buttonType === 'icon' ? renderIcon() : renderText()}
    </Pressable>
  );
};

export default CustomButton;
