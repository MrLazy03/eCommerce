import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import ProductListing from '../../screens/ProductListing';
import ProductDetails from '../../screens/ProductDetails';
import ShoppingCart from '../../screens/ShoppingCart';
import BottomTab from '../BottomTab';
const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        initialParams={{mountedFor: 'AppStack'}}
      />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export default AppStack;
