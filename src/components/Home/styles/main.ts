import { StyleSheet } from "react-native";

export const styles = (colors: ReactNativePaper.ThemeColors) => {
  return StyleSheet.create({
    title: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    fotter: {
      paddingBottom: 60
    },
    header: {
      width: '100%',
      marginTop: 0,
      paddingTop: 0,
      height: 56,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 15
    },
    titleLeft: {
      fontSize: 20,
      fontWeight: '600',
      color: "#000",
    
    },
    opnion: {
      borderRadius: 50,
      borderColor: colors.primary,
      borderWidth: 1,
      backgroundColor: colors.primary,
      padding: 8
    },
    opnionText: {
      color: (colors as any).textSecondary,
      fontSize: 13
    }
  })
}