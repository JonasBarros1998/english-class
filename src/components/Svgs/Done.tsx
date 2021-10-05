import React from 'react';
import {Path, Svg} from 'react-native-svg';

function Done() {
  return (
    <Svg height="32px" viewBox="0 0 24 24" width="32px" fill="#FFF">
      <Path d="M0 0h24v24H0V0z" fill="none"/>
      <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </Svg>
  );
};

export default Done;
