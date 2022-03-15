import {User} from '@react-native-google-signin/google-signin';

export type userSignIn = {
  uid: string | null;
} & User;
