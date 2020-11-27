import 'react-native-gesture-handler'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import MainNavigator from './src'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
