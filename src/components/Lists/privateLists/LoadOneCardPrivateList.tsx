import React, {useEffect} from 'react';
import {Text} from 'react-native';

import PrivateCard from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';

function LoadOneCardPrivateList() {
  useEffect(() => {
    loadPrivateList();
  });

  return <Text>JONAS</Text>;
}

export default LoadOneCardPrivateList;
