import React from 'react';
import Login from '@modules/auth/components/Login';

type param = {
  route: any;
  navigation: any;
};

function LoginScreen(props: param) {
  return <Login />;
}

export default LoginScreen;
