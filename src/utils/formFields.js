import React from 'react';
import { FormControl, Input } from 'native-base';

export const CustomTextField = ({
  label,
  placeHolder,
  isInvalid,
  errorMsg,
  onChange,
  type = 'text',
  value,
  ...rest
}) => {
  return (
    <FormControl isInvalid={isInvalid} {...rest}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        value={value}
        type={type}
        variant="outline"
        placeholder={placeHolder}
        onChangeText={onChange}
        marginBottom="10px"
      />
      {isInvalid && (
        <FormControl.ErrorMessage>{errorMsg}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
