/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SignIn from './src/screens/SignIn';
import SignInWithNumber from './src/screens/SignInWithNumber';
import SignInVerification from './src/screens/SignInVerification';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Orders from './src/screens/Orders';
import Blogs from './src/screens/Blogs';
import Contact from './src/screens/Contact';
import Account from './src/screens/Account';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { black, blue } from './src/constants/colors';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
      initialRouteName='Home' 
      screenOptions={{
        tabBarInactiveTintColor: black,
        tabBarActiveTintColor: blue,
        headerShown: false,
      }}>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={black} size={26} />
        }}
      />
      <Tab.Screen 
        name='Blogs' 
        component={Blogs}
        options={{
          tabBarLabel: 'Blogs',
          tabBarIcon: ({ color }) => <Icon name="web" color={black} size={26} />
        }}
      />
      <Tab.Screen 
        name='Cart' 
        component={Orders}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={black} size={26} />
        }}
      />
      <Tab.Screen 
        name='Contact' 
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => <Icon name="message" color={black} size={26} />
        }}
      />
      <Tab.Screen 
        name='Account' 
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => <Icon name="account-box" color={black} size={26} />
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignInWithNumber' component={SignInWithNumber}/>
        <Stack.Screen name='SignInVerification' component={SignInVerification}/>
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='HomeScreen' component={BottomNavigator}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
};

export default App;
