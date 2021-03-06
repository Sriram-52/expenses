import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Authentication/components/SignIn';
import SignUp from '../Authentication/components/SignUp';
import routeNames from './routeNames';

const Stack = createNativeStackNavigator();

function UnProctectedRoutes() {
  return (
    <Stack.Navigator initialRouteName={routeNames.signIn}>
      <Stack.Screen
        name={routeNames.signIn}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routeNames.signUp}
        component={SignUp}
        options={{ title: 'Sign Up' }}
      />
    </Stack.Navigator>
  );
}

export default UnProctectedRoutes;
