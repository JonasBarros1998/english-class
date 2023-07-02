import {StyleSheet} from 'react-native';
import {fonts} from '@theme/fonts';

export const styles = (theme: any) => {

  const {colors} = theme as any;

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: colors.background,
      width: '95%',
      marginVertical: 7,
      marginHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
    },
    cardList: {
      backgroundColor: colors.background,
      width: '95%',
      marginVertical: 7,
      marginHorizontal: 9,
      paddingHorizontal: 7,
      paddingVertical: 8,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardListButtonTitle: {
      width: '80%'
    },
    cardListButtonFlashCard: {
      width: '20%'
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
      color: colors.text,
      borderBottomColor: 'black',
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
    },
  
    trashIcon: {
      color: colors.error,
      marginTop: 4,
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      paddingTop: 8,
      textAlign: 'center'
    }
  });
}
