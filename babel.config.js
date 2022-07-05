module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.jsx', '.tsx', '.js', '.json'],
        alias: {
          '@theme': './src/theme',
          '@state': './src/state',
          '@auth': './src/modules/auth',
          '@services': './src/services',
          '@components': './src/components',
          '@modules': './src/modules',
          '@global': './src/global',
        },
      },
    ],
  ],
  env: {
    testing: {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    },
  },
};
