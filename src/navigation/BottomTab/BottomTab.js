import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();
import ProductListing from '../../screens/ProductListing';
import AccountScreen from '../../screens/AccountScreen';
import {Icon} from '../../components';

const BottomTabs = () => {
  const CustomTabLabel = ({focused, label}) => {
    return (
      <Text
        style={{
          color: focused ? 'blue' : 'gray',
          fontSize: 12,
        }}>
        {label}
      </Text>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="ProductListing"
        component={ProductListing}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Home" />
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              type={'Entypo'}
              name={'home'}
              size={22}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabLabel focused={focused} label="Account" />
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              type={'MaterialCommunityIcons'}
              name={'account'}
              size={22}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
