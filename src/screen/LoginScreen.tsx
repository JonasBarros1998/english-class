import React from 'react';
import {Login} from '@components/authentication';

type param = {
  route: any;
  navigation: any;
};

function LoginScreen(props: param) {
  return <Login />;
}

export default LoginScreen;
