import React from 'react';
import {Pressable} from 'react-native';
import {SearchIcon, Box} from 'native-base';
import {OpenOrCloseSearchInputComponent} from '../useCases/openOrCloseSearchInput';
import {useSelector} from 'react-redux';

function Search() {
  const openOrCloseInput = useSelector(
    (datas: {openOrCloseSearchInput: {open: boolean}}) => {
      return datas.openOrCloseSearchInput.open;
    },
  );

  return (
    <Box marginTop={'1'} marginRight={'4'}>
      <Pressable
        onPress={() => OpenOrCloseSearchInputComponent(openOrCloseInput)}>
        <Box>
          <SearchIcon size="6" color="white" />
        </Box>
      </Pressable>
    </Box>
  );
}

export default Search;
