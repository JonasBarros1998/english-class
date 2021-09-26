const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
};


/**
 *  "@components/*": ["./src/components/*"],
      "@database": ["./src/database"],
      "@screen": ["./src/screen"],
      "@lists/*": ["./src/lists/*"],
 */