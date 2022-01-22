export type userInfo = {
  id?: string | null;
  scopes?: string[] | never[];
  idToken: string | null;
  uid: string | null;
  serverAuthCode: null | string;
  user: {
    photo: string | null;
    email: string | null;
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
