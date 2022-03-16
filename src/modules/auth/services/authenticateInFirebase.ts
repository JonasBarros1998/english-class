import auth from '@react-native-firebase/auth';

async function toAutenticateInFirebase(
  tokenId: string,
): Promise<{uid: string | null}> {
  return new Promise(async (resolve, reject) => {
    const googleCredential = auth.GoogleAuthProvider.credential(tokenId);
    await auth().signInWithCredential(googleCredential);
    auth().onAuthStateChanged(user => {
      if (user !== null) {
        return resolve({uid: user.uid});
      }
      return resolve({uid: null});
    });
  });
}

export {toAutenticateInFirebase};
