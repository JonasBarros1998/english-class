import { StyleSheet } from "react-native";

export const styles = (params?: {direction: "row"|"column"}) => {
  return StyleSheet.create({
    container: { 
      display: "flex",
      justifyContent: "center",
      flexDirection: params?.direction
    },
    card: {
      borderRadius: 4,
      backgroundColor: "white",
      shadowRadius: 4,
      shadowOffset: { width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 1,
      width: "90%",
      maxWidth: "90%",
      height: 250,
      marginTop: 32,
    },
    photo: {
      borderRadius: 50,
      width: 60,
      height: 60,
      marginTop: 15,
      marginBottom: 10
    },
    description: {
      textAlign: "center",
      fontWeight: "500",
      lineHeight: 25,
      letterSpacing: 0.4
    },
    button: {
      marginTop: 10,
      width: 100,
      marginLeft: "auto",
      marginRight: "auto",
    }
  })
}