import React, { useState } from 'react';
import { Box, Button, Center, HStack, VStack } from 'native-base';
import { CustomTextField } from '../../../../utils/formFields';
import { useDispatch } from 'react-redux';
import { signIn } from '../../middleware';
import routeNames from '../../../Navigators/routeNames';

export default function SignIn({ navigation }) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const onSubmit = e => {
    dispatch(signIn(state.email, state.password));
  };

  return (
    <Box justifyContent="center" flex={1} padding="20px" marginBottom="10px">
      <CustomTextField
        label="Email"
        placeHolder="Enter email"
        isInvalid={false}
        onChange={val => handleChange('email', val)}
        value={state.email}
      />
      <CustomTextField
        label="Password"
        placeHolder="Password"
        type="password"
        isInvalid={false}
        onChange={val => handleChange('password', val)}
        value={state.password}
      />
      <VStack justifyContent="space-around">
        <Button marginBottom="10px" onPress={onSubmit}>
          SignIn
        </Button>
        <Button
          variant="link"
          color="secondary.900"
          onPress={() => navigation.navigate(routeNames.signUp)}>
          New User? Create One
        </Button>
      </VStack>
    </Box>
  );
}
