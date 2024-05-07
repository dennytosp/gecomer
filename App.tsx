import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { BackgroundTimerProvider } from '@/context/background-timer-provider.context'
import RootStack from '@/navigators/stack/root-stack'
import { AppStyles } from '@/styles'
import { navigationRef } from '@/utils/holder'

const App = () => {
  return (
    <SafeAreaProvider>
      <BackgroundTimerProvider>
        <GestureHandlerRootView style={[AppStyles.fill]}>
          <BottomSheetModalProvider>
            <NavigationContainer ref={navigationRef}>
              <RootStack />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </BackgroundTimerProvider>
    </SafeAreaProvider>
  )
}

export default App
