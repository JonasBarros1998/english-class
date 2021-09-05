import React from 'react';
import {G, Path} from 'react-native-svg';
import {Icon} from 'native-base';

function IconList() {
  return (
    <Icon viewBox="0 0 24 24" height="40px" width="40px" flex={1}>
      <G fill="none">
        <Path d="M0 0h24v24H0V0z" />
        <Path d="M0 0h24v24H0V0z" />
      </G>
      <Path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </Icon>
  );
}

export default IconList;
