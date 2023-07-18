// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageTableView} from '../../Modules/Home/Screen/ImageTableView';
import StackNavigation from '../Stack';
import {BottomTabs} from '../BottomTab';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createNativeStackNavigator();

function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={'BottomTabs'}
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen
          // options={{title: 'My home'}}

          name="StackNavigation"
          component={StackNavigation}
        />
        <AppStack.Screen
          // options={{title: 'My home'}}
          name="BottomTabs"
          component={BottomTabs}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStackNavigation;
