import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#312e81',
    background: '#fafafa',
    secondary: '#f50057',
    text: 'rgba(0, 0, 0, 0.38)',
    textSecondary: 'white',
    surface: 'rgb(171, 0, 60)',
    error: '#f44336',
    warning: '#ff9800',
    sucess: '#4caf50',
    divider: 'rgba(0, 0, 0, 0.12)',
    colorIcon: 'rgba(0, 0, 0, 0.54)',
    colorIconSecondary: 'white',
    textInputBackgroundFlat: 'transparent'
  },
};
