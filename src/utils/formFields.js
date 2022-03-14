import React from 'react';
import { Checkbox, FormControl, Input, Text } from 'native-base';

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

export const CustomSelect = ({ label, values, onChange, items }) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Checkbox.Group
        mt="2"
        colorScheme="green"
        onChange={onChange}
        defaultValue={values}
        alignItems="flex-start">
        {items.map(item => {
          return (
            <Checkbox my="1" key={item.id} value={item.value}>
              {item.displayName}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </FormControl>
  );
};