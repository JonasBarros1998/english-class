export interface FirebaseAuth {
  displayName: string, 
  email: string, 
  emailVerified: boolean, 
  isAnonymous: boolean, 
  metadata: {
    creationTime: number, 
    lastSignInTime: number
  }, 
  multiFactor: {
    enrolledFactors: Array<any>
  }, 
    phoneNumber: string, 
    photoURL: string, 
    providerData: [
      {
        displayName: string, 
        email: string, 
        phoneNumber: string|null, 
        photoURL: string, 
        providerId: string, 
        uid: string
      }
    ], 
  providerId: string, 
  tenantId: string|null, 
  uid: string
}