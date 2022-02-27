import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, Center, Avatar, Text, Button} from 'native-base';
import {userInfo as typeUserInfo} from '@global/types/userInfo';
import {logout} from '@services/auth/googleSignin/index';
import {removeUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';
import {loggedUser} from '@pubsub/loggedUser';
import AlertDialog from '@components/Alerts/AlertDialog';

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
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  async function exitApp() {
    await logout();
    dispatch(loggedUser({status: true}));
    dispatch(removeUserDatasOnStorageAsync());

    //returning previous state
    dispatch(loggedUser({status: false}));
  }

  function onClose() {
    setIsOpen(false);
  }

  function btnConfirmation() {
    setIsOpen(false);
    exitApp();
  }

  return (
    <>
      <Box
        bg="#312E81"
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
                    {typeof userData.lists.publicLists !== 'undefined'
                      ? userData.lists.publicLists.length
                      : 0}
                  </Text>
                </Text>
                <Text fontSize={'lg'}>
                  Total de listas Privadas:
                  <Text
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                    paddingLeft={'1'}>
                    {typeof userData.lists.privateLists !== 'undefined'
                      ? userData.lists.privateLists.length
                      : 0}
                  </Text>
                </Text>
              </Box>
              <Button
                variant="unstyled"
                bg="danger.600"
                w="30%"
                marginTop={'16'}
                onPress={() => {
                  setIsOpen(!isOpen);
                }}>
                <Text
                  color="white"
                  fontSize={'md'}
                  fontWeight={'medium'}
                  textTransform={'uppercase'}>
                  Sair
                </Text>
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
      <AlertDialog
        title="Deseja sair?"
        body="Ao sair suas listas ficaram guardadas conosco e você poderá voltar quando quiser"
        textBtnCancel="Fechar"
        textBtnConfirmation="Confirmar"
        isOpen={isOpen}
        onClose={onClose}
        btnConfirmation={btnConfirmation}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default UserProfile;
