import React, {useState, useMemo} from 'react';
import {Box, Input, PresenceTransition} from 'native-base';
import {useSelector} from 'react-redux';
import {searchEnglishListOnState} from '../services/searchEnglishListOnState';

function SearchInput() {
  const [showComponent, setShowComponent] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>();

  const openOrCloseInput = useSelector(
    (datas: {openOrCloseSearchInput: {open: boolean}}) => {
      return datas.openOrCloseSearchInput.open;
    },
  );

  function onChangeSearchInput(inputText: string) {
    setInputValue(inputText);
    searchEnglishListOnState(inputText);
  }

  useMemo(() => {
    setShowComponent(openOrCloseInput);
  }, [openOrCloseInput]);

  return showComponent === true ? (
    <Box alignItems="center">
      <PresenceTransition
        visible={showComponent}
        style={{
          width: '100%',
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          transition: {
            type: 'spring',
            tension: 500,
            friction: 200,
          },
        }}>
        <Input
          mx="3"
          size="lg"
          placeholder="Pesquisar por"
          w="100%"
          maxWidth="100%"
          backgroundColor={'white'}
          borderColor={'white'}
          borderTopRadius={'0'}
          borderBottomRadius={'0'}
          marginLeft={'0px'}
          value={inputValue}
          onChangeText={input => onChangeSearchInput(input)}
        />
      </PresenceTransition>
    </Box>
  ) : (
    <></>
  );
}

export default SearchInput;
