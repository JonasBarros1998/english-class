import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {theme, fonts} from '@theme/index';
import store from 'src/state/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

const App = () => {
  const {colors} = useTheme();
  const {titleLarge} = fonts;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <NavigationContainer>
            <StatusBar />
            <Text style={{color: colors.primary}}>Init app</Text>
            <Text
              style={{
                ...titleLarge,
              }}>
              Init app
            </Text>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
