import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// custom imports
import {Container} from '../../components';
import {fetchProductsList} from '../../store/Modules/Products/productSlice';

const Splash = ({navigation, route}) => {
  const dispatch = useDispatch();
  const isAuthUser = useSelector(state => state.auth.isAuthUser);

  useEffect(() => {
    if (isAuthUser) fetchIntialData();
    const timer = setTimeout(() => {
      isAuthUser
        ? navigation.replace('BottomTab')
        : navigation.replace('SignIn');
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAuthUser]);

  // get all product data
  const fetchIntialData = () => {
    dispatch(fetchProductsList());
  };

  return (
    <Container
      customStyle={{
        backgroundColor: 'rgba(42,77,208,1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          color: 'white',
        }}>
        SHOPLY.
      </Text>
    </Container>
  );
};

export default Splash;
