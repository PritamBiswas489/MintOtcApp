import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@screens/homeScreen';
// import ScreenOne from '@screens/screenOne';
// import ScreenTwo from '@screens/screenTwo';
// import ScreenThree from '@screens/screenThree';
// import ScreenFour from '@screens/screenFour';

import Login from '@screens/login';
import Register from '@screens/register';
import AccountVerification from '@screens/accountVerification';
import ForgotPassword from '@screens/forgotPassword';
import Otp from '@screens/otp';
import ResetPassword from '@screens/resetPassword';
import HomePage from '@screens/homePage';
import FaqScreen from '@screens/faqScreen';
import MembershipScreen from '@screens/membershipScreen';
import TradeScreen from '@screens/tradeScreen';

function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: 'MintPay OTC', // This is the header title for all screens
        }}
      >
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{ drawerLabel: 'Home', headerTitle: 'Home' }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ drawerLabel: 'Login', headerTitle: 'Login' }}
        />

        <Drawer.Screen
          name="AccountVerification"
          component={AccountVerification}
          options={{
            drawerLabel: 'AccountVerification',
            headerTitle: 'AccountVerification',
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{ drawerLabel: 'Register', headerTitle: 'Register' }}
        />
        <Drawer.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            drawerLabel: 'ForgotPassword',
            headerTitle: 'ForgotPassword',
          }}
        />
        <Drawer.Screen
          name="Otp"
          component={Otp}
          options={{
            drawerLabel: 'OTP Verification',
            headerTitle: 'OTP Verification',
          }}
        />
        <Drawer.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            drawerLabel: 'ResetPassword',
            headerTitle: 'ResetPassword',
          }}
        />
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{ drawerLabel: 'HomePage', headerTitle: 'HomePage' }}
        />
        <Drawer.Screen
          name="FaqScreen"
          component={FaqScreen}
          options={{ drawerLabel: 'Faq', headerTitle: 'Faq' }}
        />
        <Drawer.Screen
          name="MembershipScreen"
          component={MembershipScreen}
          options={{
            drawerLabel: 'Registration & Membership',
            headerTitle: 'Registration & Membership',
          }}
        />
        <Drawer.Screen
          name="TradeScreen"
          component={TradeScreen}
          options={{
            drawerLabel: 'Trade',
            headerTitle: 'Trade',
          }}
        />

        {/* <Drawer.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{ drawerLabel: 'Screen One', headerTitle: 'Screen One' }}
        />
        <Drawer.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{ drawerLabel: 'Screen two', headerTitle: 'Screen Two' }}
        />
        <Drawer.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{ drawerLabel: 'Screen three', headerTitle: 'Screen Three' }}
        />
        <Drawer.Screen
          name="ScreenFour"
          component={ScreenFour}
          options={{ drawerLabel: 'Screen four', headerTitle: 'Screen Four' }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
