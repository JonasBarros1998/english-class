import React from 'react';
import {FlatList} from 'react-native';

import {NativeBaseProvider, View} from 'native-base';

import ListDetails from './src/lists/listDetails/';

import {listDetails} from './src/database';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

const App = () => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <View flex={1}>
        <FlatList
          data={listDetails}
          renderItem={({item}) => (
            <ListDetails
              word={item.word}
              phrase={item.phrase}
              translation={item.translation}
            />
          )}
          keyExtractor={({id}) => String(id)}
        />
      </View>
    </NativeBaseProvider>
  );
};

export default App;
