import React, { useState } from 'react';
import { Box, Button } from 'native-base';
import { CustomTextField } from '../../../../utils/formFields';
import { useDispatch } from 'react-redux';
import { signUp } from '../../middleware';

export default function SignUp() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const onSubmit = () => {
    dispatch(signUp(state));
  };

  return (
    <Box flex={1} padding="20px">
      <CustomTextField
        label="First Name"
        placeHolder="Enter first name"
        onChange={val => handleChange('firstName', val)}
        isInvalid={false}
      />
      <CustomTextField
        label="Last Name"
        placeHolder="Enter last name"
        onChange={val => handleChange('lastName', val)}
        isInvalid={false}
      />
      <CustomTextField
        label="Email"
        placeHolder="Enter email"
        onChange={val => handleChange('email', val)}
        isInvalid={false}
      />
      <CustomTextField
        label="Password"
        placeHolder="Enter password"
        type="password"
        onChange={val => handleChange('password', val)}
        isInvalid={false}
      />
      <Button onPress={onSubmit}>SignUp</Button>
    </Box>
  );
}
