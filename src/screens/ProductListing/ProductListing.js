import {FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CustomHeader, Container, ProductItem} from '../../components';
import {fetchProductsList} from '../../store/Modules/Products/productSlice';

const ProductListing = ({navigation}) => {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // handle refresh
  const handleReferesh = useCallback(() => {
    setLoading(true);
    dispatch(fetchProductsList())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <CustomHeader
        title={'Shoply'}
        cartIcon={true}
        onCartPress={() => {
          navigation.navigate('ShoppingCart');
        }}
      />
      <FlatList
        data={products}
        refreshing={loading}
        onRefresh={handleReferesh}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <ProductItem item={item} index={index} navigation={navigation} />
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </Container>
  );
};

export default ProductListing;
