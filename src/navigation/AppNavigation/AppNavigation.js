import React from 'react';
import {useSelector} from 'react-redux';

import AppStack from '../AppStack';
import AuthStack from '../AuthStack';

const AppNavigation = () => {
  const isAuthUser = useSelector(state => state.auth.isAuthUser);
  return isAuthUser ? <AppStack /> : <AuthStack />;
};

export default AppNavigation;
