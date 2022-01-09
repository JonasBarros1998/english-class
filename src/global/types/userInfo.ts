export type userInfo = {
  scopes?: string[];
  serverAuthCode: null | string;
  idToken: string | null;
  uid: string;
  user: {
    photo: string | null;
    email: string;
    familyName: string | null;
    givenName: string | null;
    name: string | null;
    id: number | null | string;
  };
  lists: {
    publicLists: string[];
    privateLists: string[];
  };
};
