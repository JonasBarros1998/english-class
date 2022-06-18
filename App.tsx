import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {theme} from '@theme/index';
import store from 'src/state/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Login from '@auth/components/Login';

const App = () => {
  return (
    /**
    <Provider>
    */
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <NavigationContainer>
          <StatusBar />
          <Login />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
    /**
    </Provider>
    */
  );
};

export default App;
