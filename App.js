import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Welcome} from './src/screen'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="transparent"  />
      <SafeAreaView>
        <Welcome/>
      </SafeAreaView>
    </>
  );
};

export default App;
