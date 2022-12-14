/**
 * Assignment 4
 * https://github.com/bozalp
 *
 */

import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/Pages/Home";
import Search from "./src/Pages/Search";
import SettingsScreen from "./src/Pages/Settings/SettingsScreen";
import SplashScreen from "./src/Pages/SplashScreen";
import SignUp from "./src/Pages/SignUp";

import { Provider} from 'react-redux';
import { store } from "./src/Toolkits/store";
import { setDark, setLight } from './src/Toolkits/themeSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';

import lightTheme from './src/Themes/light';
import darkTheme from './src/Themes/dark';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
            headerShown: false
          }}  />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
