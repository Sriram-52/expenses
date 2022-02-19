import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups, { GroupHeader } from '../Groups';
import routeNames from './routeNames';

const Stack = createNativeStackNavigator();

function ProtectedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routeNames.groups}
        component={Groups}
        options={{ headerRight: () => <GroupHeader /> }}
      />
    </Stack.Navigator>
  );
}

export default ProtectedRoutes;
