import 'react-native-gesture-handler'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import MainNavigator from './src'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/redux/store'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Welcome} from './src/screen'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
           <StatusBar translucent barStyle='dark-content' backgroundColor="transparent"  />
            <SafeAreaView>
              <Welcome/>
            </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
