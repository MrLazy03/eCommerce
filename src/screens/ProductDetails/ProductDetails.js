import React, {useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {Rating, Container, CustomHeader, CustomButton} from '../../components';
import {addItemToCart} from '../../store/Modules/ShoppingCart/shoppingCartSlice';

const ProductDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const productId = route.params?.productId;
  const product = useSelector(state =>
    state.product.products.find(product => product.id === productId),
  );
  const isAlreadyInCart = useSelector(state =>
    state.shoppingCart.cartItems?.some(
      product => product.item?.id === productId,
    ),
  );

  const handleQuickBuy = useCallback(() => {
    if (!isAlreadyInCart) dispatch(addItemToCart(product));
    navigation.navigate('ShoppingCart');
  }, [product, isAlreadyInCart]);

  const handleAddToCart = useCallback(() => {
    if (isAlreadyInCart) {
      navigation.navigate('ShoppingCart');
      return;
    }

    dispatch(addItemToCart(product));
    showMessage({type: 'success', message: 'Added to Cart Successfuly'});
  }, [product, isAlreadyInCart]);

  const renderActionButtons = () => {
    return (
      <View style={styles.btnWrapper}>
        <CustomButton
          customStyle={{
            width: '45%',
            padding: 0,
            backgroundColor: 'transparent',
            textColor: 'blue',
            borderColor: 'blue',
            borderWidth: 0.5,
          }}
          title={isAlreadyInCart ? 'Go to cart' : 'Add to cart'}
          textStyle={{color: 'blue'}}
          onPress={handleAddToCart}
        />
        <CustomButton
          customStyle={{width: '45%', padding: 0, height: 42}}
          textStyle={{color: 'white'}}
          title={'Buy Now'}
          onPress={handleQuickBuy}
        />
      </View>
    );
  };
  const renderBasicDetails = () => {
    return (
      <View style={styles.basicDetailContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Rating rating={product.rating?.rate} />
          <Text style={{color: 'rgba(0,0,0,0.8)', marginHorizontal: 10}}>
            {product?.rating.count} Reviews
          </Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.offerPrice}>
            {`\u20B9 `}
            {product.price}
          </Text>
        </View>
        <Text style={styles.desc}>
          <Text style={{color: 'black'}}>Description :</Text>{' '}
          {product?.description}
        </Text>
      </View>
    );
  };

  return (
    <Container customStyle={{flex: 1}}>
      <CustomHeader
        title={'Product Details'}
        isBackVisible={true}
        cartIcon={true}
        onBackPress={() => {
          navigation.goBack();
        }}
        onCartPress={() => {
          navigation.navigate('ShoppingCart');
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{uri: product?.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        {renderBasicDetails()}
      </ScrollView>
      {renderActionButtons()}
    </Container>
  );
};

export default ProductDetails;
