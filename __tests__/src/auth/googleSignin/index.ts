import {login, configureGoogleSignIn} from '@auth/googleSignin/index';

test('if do user login succesfully, should return user info', async function () {
  await configureGoogleSignIn();
  await expect(login()).resolves.toEqual(
    expect.objectContaining({
      scopes: expect.any(String),
      idToken: expect.any(String),
      user: {
        photo: expect.any(String),
        email: expect.any(String),
        familyName: expect.any(String),
        givenName: expect.any(String),
        name: expect.any(String),
        id: expect.any(String),
      },
    }),
  );
});
