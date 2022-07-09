import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {theme} from '@theme/index';
import Routes from 'src/routes/route';
import store from "@state/redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
          <StatusBar />
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
