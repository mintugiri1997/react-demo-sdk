const path = require('path');

module.exports = {
  dependency: {
    platforms: {
      ios: { podspecPath: path.join(__dirname, 'react-native-demo-sdk.podspec') },
      android: {
        packageImportPath: 'import com.reactnativedemosdk.DemoSdkPackage;',
        packageInstance: 'new DemoSdkPackage()',
      },
    },
  },
};