import auth from "@react-native-firebase/auth";

export async function toAutenticateFirebase(tokenId: string) {
    const googleCredential = auth.GoogleAuthProvider.credential(tokenId);
    return auth().signInWithCredential(googleCredential)
      .then(function(user) {
        return user.additionalUserInfo
      })
      .catch(function(error) {
        console.error("ERROR TO_AUTHENTICATE_FIREBASE");
        throw error;
      });
}