import {StyleSheet} from 'react-native';
import {fonts} from '@theme/fonts';

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
      paddingBottom: 7,
      paddingTop: 7,
      borderRadius: 5
    },
    'card:last-child' : {
      marginBottom: 100,
    },
    textInput: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      height: 40,
      color: colors.text,
      borderBottomColor: 'black',
    },
    textFieldInput: {
      marginBottom: 10,
      backgroundColor: 'transparent',
      //height: 'auto',
      maxHeight: 100,
      color: colors.text,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      borderStyle: 'solid',
    },
    animated: {
      alignItems: "center",
      marginTop: 2,
    },
    cardInfo: {
      padding: 10,
      color: colors.text,
    },
    subTitle: {
      fontFamily: fonts.subTitle.fontFamily,
      fontWeight: "600",
      fontSize: fonts.subTitle.fontSize,
    },
    fotter: {
      paddingBottom: 30
    }
  });
}
