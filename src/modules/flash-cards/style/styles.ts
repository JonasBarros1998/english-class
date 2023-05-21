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

    flashCardList: {
      backgroundColor: theme.colors.primary,
      width: '70%',
      maxWidth: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 16,
      height: 160,
      padding: 10,
      margin: 20
    },

    flashCardText: {
      fontSize: 20,
      fontFamily: 'OpenSans-Medium',
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
    },

    expressions: {
      borderRadius: 50,
      backgroundColor: '#665AC5',
      width: "100%",
      height: 30,
      
    },

    expressionsText: {
      color: theme.colors.background,
      fontSize: 14,
      fontFamily: 'OpenSans-Medium',
      textAlign: 'center',
      paddingTop: 5
    },

    dateOpen: {
      color: theme.colors.background,
      fontFamily: 'OpenSans-Medium',
      textAlign: 'left',
      fontSize: 12,
    },

    emptyListContainer: {
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    listEmptyTitle: {
      fontSize: 20,
      fontFamily: 'OpenSans-Bold',
      textAlign: 'center',
      color: '#444444'
    },

    listEmptyDescribe: {
      fontFamily: 'OpenSans-Medium',
      textAlign: 'center',
      fontSize: 14,
      marginVertical: 20
    },

    listEmptyButton: {
      width: '60%',
      textAlign: 'center'
    },

    resultListButton: {
      width: 150,
      backgroundColor: '#FB3B6A',
    },

    buttonContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row'
    }
  });
}
