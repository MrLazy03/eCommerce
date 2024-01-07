import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn';
import Splash from '../../screens/Splash';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        initialParams={{mountedFor: 'AuthStack'}}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStack;
