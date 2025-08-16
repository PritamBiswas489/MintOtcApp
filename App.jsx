import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@screens/HomeScreen';
import ScreenOne from '@screens/ScreenOne';
import ScreenTwo from '@screens/ScreenTwo';  
import ScreenThree from '@screens/ScreenThree';
import ScreenFour from '@screens/ScreenFour';

 

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitle: 'MintPay OTC', // This is the header title for all screens
        }}
      >
        <Drawer.Screen name="Home" component={TabNavigator} options={{ drawerLabel: 'Home', headerTitle: 'Home' }} />
        <Drawer.Screen name="ScreenOne" component={ScreenOne} options={{ drawerLabel: 'Screen One', headerTitle: 'Screen One' }} />
        <Drawer.Screen name="ScreenTwo" component={ScreenTwo} options={{ drawerLabel: 'Screen two', headerTitle: 'Screen Two' }} />
        <Drawer.Screen name="ScreenThree" component={ScreenThree} options={{ drawerLabel: 'Screen three', headerTitle: 'Screen Three' }} />
        <Drawer.Screen name="ScreenFour" component={ScreenFour} options={{ drawerLabel: 'Screen four', headerTitle: 'Screen Four' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
