import {StyleSheet} from 'react-native';

export const styles = (theme: ReactNativePaper.Theme) => {

  const {colors} = theme as any;

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 1,
    },
    card: {
      backgroundColor: colors.background,
      width: '95%',
      marginTop: 7,
    },
    'card:last-child' : {
      marginBottom: 100,
    },
    textInput: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      height: 40,
      color: colors.text,
      borderBottomColor: colors.divider
    }
  });
}
