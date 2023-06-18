import { StyleSheet } from "react-native";

export const styles = (colors: any) => {
  return StyleSheet.create({
    info: {
      /*backgroundColor: colors.background, */
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingHorizontal: 20
    }
  });
}