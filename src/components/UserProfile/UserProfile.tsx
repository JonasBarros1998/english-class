import React from 'react';
import {Box, Center, Avatar, Text, Button} from 'native-base';
import {userInfo as typeUserInfo} from '@global/types/userInfo';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '@auth/googleSignin/index';
import {removeUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';

type select = {
  userDatasLogged: {
    userData: typeUserInfo;
  };
};

type params = {
  navigation: any;
  route: any;
};

function UserProfile(props: params) {
  const {userData} = useSelector((state: select) => state.userDatasLogged);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        bg="primary.500"
        width="100%"
        borderBottomRadius="3xl"
        height={'72'}
        maxHeight={'64'}>
        <Center position={'relative'}>
          <Box
            borderRadius={'lg'}
            bg="white"
            shadow={'4'}
            width={'90%'}
            maxWidth={'90%'}
            height={'md'}
            marginTop={'32'}>
            <Center>
              <Avatar
                size="xl"
                marginTop={'10'}
                source={{
                  uri:
                    typeof userData.user.photo === 'undefined' ||
                    userData.user.photo === null
                      ? ''
                      : userData.user.photo,
                }}
              />
              <Box marginTop={'10'}>
                <Text
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  textTransform={'capitalize'}
                  letterSpacing={'xl'}>
                  {userData.user.name === null ? '' : userData.user.name}
                </Text>
              </Box>

              <Box>
                <Text
                  color={'#a3a3a3'}
                  fontSize={'sm'}
                  letterSpacing={'xl'}
                  marginTop={'1.5'}>
                  {userData.user.email === null ? '' : userData.user.email}
                </Text>
              </Box>

              <Box marginTop={'8'}>
                <Text fontSize={'lg'}>
                  Total de listas Públicas:
                  <Text fontWeight={'semibold'} fontSize={'lg'}>
                    {typeof userData.lists.publicLists === 'undefined'
                      ? 0
                      : userData.lists.publicLists.length}
                  </Text>
                </Text>
                <Text fontSize={'lg'}>
                  Total de listas Privadas:
                  <Text
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                    paddingLeft={'1'}>
                    {typeof userData.lists.privateLists === 'undefined'
                      ? 0
                      : userData.lists.publicLists.length}
                  </Text>
                </Text>
              </Box>
              <Button bg="danger.600" w="30%" marginTop={'16'}>
                <Text
                  color="white"
                  fontSize={'md'}
                  fontWeight={'medium'}
                  textTransform={'uppercase'}
                  onPress={() => {
                    logout();
                    dispatch(removeUserDatasOnStorageAsync());
                  }}>
                  Sair
                </Text>
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default UserProfile;
