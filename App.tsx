import MainStackNavigator from '@/navigation/StackNavigator'
import { Layout } from '@/theme'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={[Layout.fill]}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
