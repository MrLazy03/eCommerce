import React, {useMemo, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {
  CustomHeader,
  CustomButton,
  CartItem,
  Container,
  CustomLoader,
} from '../../components';
import {makeProductOrder} from '../../store/Modules/ManageOrders/manageOrderSlice';
import {showMessage} from 'react-native-flash-message';
import {emptyCart} from '../../store/Modules/ShoppingCart/shoppingCartSlice';

const ShoppingCart = ({navigation}) => {
  const cartProducts = useSelector(state => state.shoppingCart?.cartItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const deliveryFee = 40;

  const handlePlaceOrder = () => {
    setLoading(true);

    const orderedDetails = {
      items: cartProducts,
      totalAmount: Number(Number(getTotalAmount) + deliveryFee).toFixed(2),
    };

    dispatch(makeProductOrder(orderedDetails))
      .unwrap()
      .then(response => {
        setLoading(false);
        dispatch(emptyCart());
        showMessage({type: 'success', message: 'Order Placed Successfully'});
      })
      .catch(error => {
        showMessage({type: 'danger', message: 'Something went wrong'});
        setLoading(false);
      });
  };

  // function to calculate total amount
  const getTotalAmount = useMemo(() => {
    let totalAmounts = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      totalAmounts += cartProducts[i]?.item?.price * cartProducts[i]?.quantity;
    }
    return Number(totalAmounts).toFixed(2);
  }, [cartProducts]);

  const renderPriceDetails = () => {
    if (cartProducts.length < 1) return null;
    return (
      <View style={styles.priceDetailContainer}>
        <Text
          style={
            styles.heading
          }>{`Price Details (${cartProducts?.length} Items)`}</Text>
        <View style={styles.totalRow}>
          <Text style={styles.total}>{`Total Product Price`}</Text>
          <Text style={styles.total}>{`+  ${`\u20B9 `}${getTotalAmount}`}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.total}>{`Delivery Fee`}</Text>
          <Text style={styles.total}>{`+  ${`\u20B9 `}${deliveryFee}`}</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={[styles.totalRow, {marginTop: 10}]}>
          <Text style={styles.heading}>{`Total Amount`}</Text>
          <Text style={styles.heading}>{`  ${`\u20B9 `}${Number(
            Number(getTotalAmount) + deliveryFee,
          ).toFixed(2)}`}</Text>
        </View>
      </View>
    );
  };

  const priceTag = () => {
    if (cartProducts.length < 1) return null;
    return (
      <View style={styles.priceTag}>
        <View style={styles.tagLeft}>
          <Text style={styles.price}>
            {`\u20B9 `}
            {Number(Number(getTotalAmount) + deliveryFee).toFixed(2)}
          </Text>
        </View>
        <View style={styles.tagRight}>
          <CustomButton title={'Place Order'} onPress={handlePlaceOrder} />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <CustomHeader
        title={'My Cart'}
        isBackVisible={true}
        onBackPress={() => {
          navigation.goBack();
        }}
        cartIcon={true}
      />
      <FlatList
        keyExtractor={item => item?.item?.id}
        data={cartProducts}
        numColumns={1}
        style={{marginBottom: 60}}
        renderItem={({item, index}) => {
          return (
            <CartItem
              key={item?.item?.id}
              item={item}
              navigation={navigation}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={{alignSelf: 'center', marginVertical: 20}}>
              Shopping Cart Empty!
            </Text>
          );
        }}
        contentContainerStyle={{paddingBottom: 10}}
        ListFooterComponent={renderPriceDetails}
      />
      {priceTag()}
      <CustomLoader loading={loading} />
    </Container>
  );
};

export default ShoppingCart;
