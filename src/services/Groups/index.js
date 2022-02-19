import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import { useDispatch } from 'react-redux';
import { signOut } from '../Authentication/middleware';

export const GroupHeader = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signOut());
  };

  return <Button onPress={onSubmit}>SignOut</Button>;
};

export default function Groups() {
  return (
    <View>
      <Text>Groups</Text>
    </View>
  );
}
