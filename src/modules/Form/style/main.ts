import {StyleSheet} from 'react-native';

export const styles = (colors: ReactNativePaper.ThemeColors) => {

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      padding: 10
    },
    title: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '500',
      color: colors.primary,
      paddingBottom: 10
    },
    footerText: {
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 15,
      color: colors.text
    },
    input: {
      borderColor: '#000',
      borderWidth: 1,
      height: 145
    },
    button: {
      marginVertical: 10,
      height: 35,
      borderRadius: 0,
      paddingVertical: 0
    }
  
  });
}
  