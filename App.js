import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './src';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#FFFFFF',
  },
});

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
            {/* <SafeAreaView style={styles.droidSafeArea}> */}
            <MainNavigator />
          {/* </SafeAreaView> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
