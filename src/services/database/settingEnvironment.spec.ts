import settingEnvironment from './settingEnvironment';

test('', function () {
  const uri = 'users';

  expect(settingEnvironment(uri)).toEqual(
    expect.stringMatching(/development\/|production\//g),
  );
});
