import {StyleSheet} from 'react-native';

export const styles = (colors: ReactNativePaper.ThemeColors) => {
  return StyleSheet.create({
    button: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent'
    },
    icon: {
      backgroundColor: colors.primary,
      width: 50,
      height: 50,
      borderRadius: 100
    }
  });
}
