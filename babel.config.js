module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.jsx', '.tsx', '.js', '.json'],
        alias: {
          '@lists': './src/lists',
          '@components': './src/components',
          '@database': './src/database',
          '@screen': './src/screen',
          '@env': './env',
          '@auth': './src/auth',
          '@publisher': './src/publisher',
          '@pubsub': './src/pubsub',
          '@storage': './src/storage',
          '@services': './src/services',
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
