import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Icon} from '..';
import {
  removeItemFromCart,
  updateItemQuantity,
} from '../../store/Modules/ShoppingCart/shoppingCartSlice';
import {showMessage} from 'react-native-flash-message';

const CartItem = ({item, navigation}) => {
  const productItem = item?.item;
  const dispatch = useDispatch();

  const handleRemovalItem = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    productItem?.id && dispatch(removeItemFromCart(productItem?.id));
    showMessage({type: 'success', message: 'Removed Successfully'});
  }, [productItem]);

  const handleQuantityCount = useCallback(
    type => {
      dispatch(updateItemQuantity({productId: productItem?.id, type}));
    },
    [item?.count],
  );

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.mainContainer}>
        <Pressable
          style={styles.imageContainer}
          onPress={() => {
            navigation.navigate('ProductDetails', {productId: productItem?.id});
          }}>
          <FastImage
            style={styles.productImage}
            source={{uri: productItem?.image}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Pressable>
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.prodTitle}>
            {productItem.title}
          </Text>

          <Text style={styles.offeredPrice}>
            {`\u20B9 `}
            {`${productItem?.price}`}
          </Text>
          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => {
                handleQuantityCount('DECREASE');
              }}
              disabled={item?.quantity < 2}
              style={{justifyContent: 'center', paddingHorizontal: 8}}>
              <Icon
                name={'minus'}
                type={'Entypo'}
                size={16}
                color={item?.quantity < 2 ? 'rgba(0,0,0,0.2)' : 'black'}
              />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              {item?.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleQuantityCount('INCREASE');
              }}
              style={{justifyContent: 'center', paddingHorizontal: 8}}>
              <Icon name={'plus'} type={'Entypo'} size={16} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
      <Pressable
        onPress={handleRemovalItem}
        style={({pressed}) => [
          styles.removeBtn,
          {backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : 'white'},
        ]}>
        <Icon
          name={'delete'}
          type={'AntDesign'}
          size={16}
          color={'rgba(202,58,49,1)'}
        />
        <Text style={styles.removeTxt}>{'Remove'}</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(CartItem);
