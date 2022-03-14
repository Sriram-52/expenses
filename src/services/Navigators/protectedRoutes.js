import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import routeNames from './routeNames';
import GroupList, {
  Header as GroupListHeader,
} from '../Groups/components/GroupList';
import CreateGroup from '../Groups/components/CreateGroup';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName={routeNames.groups}>
      <Drawer.Screen
        name={routeNames.groups}
        component={GroupList}
        options={{
          headerRight: () => <GroupListHeader navigation={navigation} />,
        }}
      />
    </Drawer.Navigator>
  );
};

function ProtectedRoutes() {
  return (
    <Stack.Navigator initialRouteName={routeNames.groups}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routeNames.createGroup} component={CreateGroup} />
    </Stack.Navigator>
  );
}

export default ProtectedRoutes;
