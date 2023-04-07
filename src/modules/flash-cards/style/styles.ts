import {StyleSheet} from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const stylessheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    results: {
      width: '80%',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginTop: 30
    },

    resultsIcon: {
      textAlign: 'center'
    },

    resultsText: {
      fontSize: 13,
      fontFamily: 'OpenSans-Medium',
      marginBottom: 10,
      color: 'black'
    },

    resultsTextNumber: {
      fontFamily: 'OpenSans-ExtraBold',
      fontSize: 20,
      color: 'black',
      textAlign: 'center'
    },

    flashCard: {
      backgroundColor: theme.colors.primary,
      width: '80%',
      height: 260,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: 16,
      marginTop: 30,
      marginBottom: 30,
      padding: 10   
    },

    flashCardText: {
      fontSize: 20,
      fontFamily: 'OpenSans-ExtraBold',
      color: theme.colors.background,
      textAlign: 'center'
    },

    buttons: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttonsText: {
      fontSize: 14,
      fontFamily: 'OpenSans-Bold',
    },

    dontknowVocabularyButton: {
      backgroundColor: '#FBAC65',
      width: 150
    },

    knowVocabularyButton: {
      backgroundColor: '#26D395',
      width: 150
    }
  });
}
