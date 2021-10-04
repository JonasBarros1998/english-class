module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ts',
          '.jsx',
          '.tsx',
          '.js',
          '.json',
        ],
        alias: {
          '@lists': './src/lists',
          '@components': './src/components',
          '@database': './src/database',
          '@screen': './src/screen',
        }
      }
    ]
  ]
};
