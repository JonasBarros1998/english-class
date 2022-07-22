import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  actionList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  }
});

export function titleStyle(theme: ReactNativePaper.Theme) {
  const {colors} = theme as any;

  return StyleSheet.create({
    container: {
      width: '85%',
      marginTop: 0,
      paddingTop: 0,
    },
  
    textInput: {
      marginTop: 0,
      paddingTop: 0,
      height: 30,
      backgroundColor: colors.textInputBackgroundFlat,
      paddingLeft: 0,
    }
  });
}

