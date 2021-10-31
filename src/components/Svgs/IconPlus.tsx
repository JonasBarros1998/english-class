import React from 'react';
import {Path} from 'react-native-svg';
import {Icon} from 'native-base';

function IconPlus() {
  return (
    <Icon viewBox="0 0 24 24" fill="#000000" height="40px" width="40px">
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </Icon>
  );
}

export default IconPlus;
