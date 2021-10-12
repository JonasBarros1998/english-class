import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

import {Box, HStack, View} from 'native-base';

import IConHome from '../Svgs/Home';
import IconList from '../Svgs/IconList';
import IconUser from '../Svgs/IconUser';

function MainMenu({navigation}: any) {
  return (
    <Box
      bgColor="#FFF"
      safeAreaTop
      width="100%"
      height="53px"
      shadow={4}
      justifyContent="center">
      <HStack
        safeAreaBottom
        paddingLeft="2"
        paddingRight="2"
        justifyContent="space-between"
        height="100%"
        alignItems="center">
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#d6d3d1', true, 45)}
          onPress={() => {
            return navigation.navigate('home');
          }}>
          <View>
            <IConHome />
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#d6d3d1', true, 45)}
          onPress={() => navigation.navigate('publicList')}>
          <View>
            <IconList />
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#d6d3d1', true, 45)}>
          <View>
            <IconUser />
          </View>
        </TouchableNativeFeedback>
      </HStack>
    </Box>
  );
}
export default MainMenu;
