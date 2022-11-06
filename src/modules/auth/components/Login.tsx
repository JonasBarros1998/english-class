import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {styles} from '../styles/login';
import {userIsLogged, userLogin} from '../useCases/auth';

export default function Login(props: any) {
  const [isLogged, setIsLogged] = useState<boolean | undefined>();

  useEffect(() => {
    userIsLogged()
      .then(function(response) {
        setIsLogged(response);
      });
  }, []);

  if (isLogged === false) {
    return (
      <View style={{...styles.container}}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            userLogin(props.navigation);
          }}
        />
      </View>
    )
  } 

  else if (typeof isLogged === 'undefined') {
    return (<Aguarde />);
  }

  return <View />

}

function Aguarde() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Aguarde...</Text>
    </View>
  )
}
