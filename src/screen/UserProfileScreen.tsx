import React from 'react';
import UserProfile from '@components/UserProfile/UserProfile';

type param = {
  route: any;
  navigation: any;
};

function UserProfileScreen(props: param) {
  return <UserProfile route={props.route} navigation={props.navigation} />;
}

export default UserProfileScreen;
