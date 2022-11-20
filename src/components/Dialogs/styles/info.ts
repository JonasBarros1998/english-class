import { StyleSheet } from "react-native";

export const styles = (colors: ReactNativePaper.ThemeColors) => {
  return StyleSheet.create({
    info: {
      backgroundColor: colors.background, 
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  });
}