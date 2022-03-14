import { IconButton } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import routeNames from '../../../Navigators/routeNames';

export const Header = ({ navigation }) => {
  return (
    <IconButton
      icon={<MaterialIcon name="add" size={22} color="black" />}
      onPress={() => navigation.navigate(routeNames.createGroup)}
    />
  );
};

export default function GroupList() {
  return (
    <View>
      <Text>GroupList</Text>
    </View>
  );
}
