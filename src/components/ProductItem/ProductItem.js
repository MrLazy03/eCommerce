import {View, Text, Platform, Pressable, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '..';
import Rating from '../Rating/Rating';

const ProductItem = ({item, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ProductDetails', {productId: item?.id});
      }}
      style={({pressed}) => [
        styles.itemContainer,
        {
          backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,1)',
        },
      ]}>
      <View style={styles.prodImageWrapper}>
        <FastImage
          style={styles.prodImage}
          source={{uri: item.image}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.description}>
        <Text numberOfLines={2} style={styles.prodName}>
          {item?.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.offerPrice}>
            {`\u20B9 `}
            {item.price}
          </Text>
          <View style={{marginHorizontal: 5}}>
            <Rating rating={item.rating?.rate} />
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.2,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderColor: 'gray',
        }}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
          View Details
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(ProductItem);
