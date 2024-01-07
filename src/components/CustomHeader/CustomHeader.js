import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

import {Icon} from '..';
import styles from './styles';

const CustomHeader = ({
  isBackVisible,
  title,
  onBackPress,
  customStyle,
  cartIcon,
  onCartPress,
}) => {
  const noOfCartItems = useSelector(
    state => state.shoppingCart?.cartItems?.length,
  );
  return (
    <View style={[styles.container, customStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {isBackVisible && (
          <TouchableOpacity
            style={[styles.backIconContainer]}
            onPress={onBackPress}>
            <Icon
              type={'Ionicons'}
              name={'chevron-back'}
              style={[styles.backIcon]}
            />
          </TouchableOpacity>
        )}

        <Text style={[styles.title]}>{title}</Text>
      </View>
      {cartIcon && (
        <Pressable onPress={onCartPress} hitSlop={10}>
          <Pressable
            style={({pressed}) => [
              styles.rightIconContainer,
              {
                backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : null,
                marginHorizontal: noOfCartItems > 0 ? 8 : 0,
              },
            ]}
            onPress={onCartPress}>
            <Icon
              type={'MaterialCommunityIcons'}
              name={'cart'}
              style={[styles.cartIcon]}
            />
          </Pressable>
          {noOfCartItems > 0 && (
            <View
              style={{
                position: 'absolute',
                aspectRatio: 1,
                top: -2,
                left: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#e32636',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  borderRadius: 50,
                }}>
                {noOfCartItems ?? 0}
              </Text>
            </View>
          )}
        </Pressable>
      )}
    </View>
  );
};

export default CustomHeader;
