import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from '@/navigation/stack/RootStack'
import { Layout } from '@/theme'

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={[Layout.fill]}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
