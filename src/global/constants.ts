import {Dimensions} from 'react-native';

export const STORAGE_USER = '@STORAGE_USER';
export const WIDTH_SCREEN = Dimensions.get('window').width;
export const HALF_THE_SCREEN = Dimensions.get('window').width / 4;
export const ENVIRONMENT = process.env.NODE_ENV === 'production';
