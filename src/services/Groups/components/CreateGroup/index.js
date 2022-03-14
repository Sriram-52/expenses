import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from 'native-base';
import { CustomSelect, CustomTextField } from '../../../../utils/formFields';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../middleware';

export default function CreateGroup() {
  const [state, setState] = useState({
    name: '',
    selectedUsers: [],
    users: [],
  });

  const { loading, data, error } = useSelector(
    appState => appState.groups.allUsers,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (!loading) {
      setState(prevState => ({
        ...prevState,
        users: data || [],
      }));
    }
  }, [JSON.stringify(data)]);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      selectedUsers: prevState.users?.map(userMapper) || [],
    }));
  }, [state.users]);

  const handleChange = (key, val) => {
    console.log(key, val);
    setState(prevState => ({ ...prevState, [key]: val }));
  };

  const onSubmit = () => {
    console.log(state.selectedUsers);
  };

  const userMapper = user => {
    return {
      id: user.id,
      value: user.id,
      displayName: user.firstName,
    };
  };

  if (loading) return <Text>loading...</Text>;

  return (
    <Box padding="20px" paddingTop="10px">
      <CustomTextField
        label="Group Name"
        onChange={val => handleChange('name', val)}
      />
      <CustomSelect
        items={state.users.map(userMapper)}
        label={`Users: ${state.selectedUsers.length}`}
        onChange={values =>
          handleChange(
            'selectedUsers',
            values
              ?.map(id => state.users.find(user => user.id === id))
              .filter(item => item) || [],
          )
        }
        values={state.selectedUsers}
      />
      <Button onPress={onSubmit}>Create Group</Button>
    </Box>
  );
}
