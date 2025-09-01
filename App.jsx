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
import FilterScreen from '@screens/filterScreen';
import GoToPayScreen from '@screens/goToPayScreen';
import ProfileScreen from '@screens/profileScreen';
import FpsScreen from '@screens/fpsScreen';
import WaitFoPaymentScreen from '@screens/waitFoPaymentScreen';
import OrderScreen from '@screens/orderScreen';
import OrderDetailsScreen from '@screens/orderDetailsScreen';
import SettingScreen from '@screens/settingScreen';
import PostingScreen from '@screens/postingScreen';
import NotificationSettingsScreen from '@screens/notificationSettingsScreen';
import LanguageScreen from '@screens/languageScreen';
import CountryRegionScreen from '@screens/countryRegionScreen';
import ProfileTwo from '@screens/profileTwo';
import MyProfileScreen from '@screens/myProfileScreen';
import EditMyProfileScreen from '@screens/editMyProfileScreen';
import MyBalancesScreen from '@screens/myBalancesScreen';

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
        <Drawer.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            drawerLabel: 'Filter',
            headerTitle: 'Filter',
          }}
        />
        <Drawer.Screen
          name="GoToPayScreen"
          component={GoToPayScreen}
          options={{
            drawerLabel: 'Go To Pay',
            headerTitle: 'Go To Pay',
          }}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            drawerLabel: 'Profile',
            headerTitle: 'Profile',
          }}
        />
        <Drawer.Screen
          name="FpsScreen"
          component={FpsScreen}
          options={{
            drawerLabel: 'Fps',
            headerTitle: 'Fps',
          }}
        />
        <Drawer.Screen
          name="WaitFoPaymentScreen"
          component={WaitFoPaymentScreen}
          options={{
            drawerLabel: 'Wait Fo Payment',
            headerTitle: 'Wait Fo Payment',
          }}
        />
        <Drawer.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            drawerLabel: 'Order',
            headerTitle: 'Order',
          }}
        />
        <Drawer.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
          options={{
            drawerLabel: 'Order Details',
            headerTitle: 'Order Details',
          }}
        />
        <Drawer.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            drawerLabel: 'Setting',
            headerTitle: 'Order Setting',
          }}
        />
        <Drawer.Screen
          name="PostingScreen"
          component={PostingScreen}
          options={{
            drawerLabel: 'Posting',
            headerTitle: 'Posting ',
          }}
        />
        <Drawer.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={{
            drawerLabel: 'Notification Settings',
            headerTitle: 'Notification Settings ',
          }}
        />
        <Drawer.Screen
          name="LanguageScreen"
          component={LanguageScreen}
          options={{
            drawerLabel: 'Language',
            headerTitle: 'Language ',
          }}
        />
        <Drawer.Screen
          name="CountryRegionScreen"
          component={CountryRegionScreen}
          options={{
            drawerLabel: 'Country/Region',
            headerTitle: 'Country/Region ',
          }}
        />

        <Drawer.Screen
          name="ProfileTwo"
          component={ProfileTwo}
          options={{
            drawerLabel: 'Profile Two',
            headerTitle: 'Profile Two ',
          }}
        />
        <Drawer.Screen
          name="MyProfileScreen"
          component={MyProfileScreen}
          options={{
            drawerLabel: 'My Profile',
            headerTitle: 'My Profile',
          }}
        />
        <Drawer.Screen
          name="EditMyProfileScreen"
          component={EditMyProfileScreen}
          options={{
            drawerLabel: 'Edit Profile',
            headerTitle: 'My Profile',
          }}
        />
        <Drawer.Screen
          name="MyBalancesScreen"
          component={MyBalancesScreen}
          options={{
            drawerLabel: 'My Balance',
            headerTitle: 'My Balance',
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
