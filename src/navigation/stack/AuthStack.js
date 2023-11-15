import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { authentication } from '@/screens'
import { routes } from '../routes'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={routes.SPLASH}
    >
      <Stack.Screen name={routes.SPLASH} component={authentication.Splash} />
      <Stack.Screen name={routes.LOGIN} component={authentication.Login} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={authentication.ForgotPassword}
      />
      <Stack.Screen
        name={routes.REGISTER}
        component={authentication.Register}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
