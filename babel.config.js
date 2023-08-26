module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: './src/environment/.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
