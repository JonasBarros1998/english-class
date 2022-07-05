const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  setupFiles: ['./__mocks__/@react-native-google-signin/google-signin.ts'],
  moduleDirectories: [
    "node_modules",
  ],
};
