import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';

export default function Home() {
  
  useSelector((store) => {
    console.log(store);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}
