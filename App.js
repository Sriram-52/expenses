import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import ProtectedRoutes from './src/services/Navigators/protectedRoutes';
import UnProctectedRoutes from './src/services/Navigators/unProtectedRoutes';
import { tokenListener } from './src/services/Authentication/middleware';

function Wrapper() {
  const TAG = 'Wrapper';
  const { loading, data, error } = useSelector(
    appState => appState.auth.signin,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    tokenListener(dispatch);
  }, []);

  if (loading) return <Box>Loading...</Box>;

  if (data.user) {
    return <ProtectedRoutes />;
  }

  return <UnProctectedRoutes />;
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Wrapper />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
