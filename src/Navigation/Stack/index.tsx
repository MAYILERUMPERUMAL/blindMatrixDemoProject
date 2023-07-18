// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageTableView} from '../../Modules/Home/Screen/ImageTableView';
import {LoginScreen} from '../../Auth/LoginScreen';
import {ImageEditScreen} from '../../Modules/Home/Screen/ImageEditScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        // options={{title: 'My home'}}

        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        // options={{title: 'My home'}}
        name="ImageTableView"
        component={ImageTableView}
      />
      <Stack.Screen
        // options={{title: 'My home'}}

        name="ImageEditScreen"
        component={ImageEditScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
