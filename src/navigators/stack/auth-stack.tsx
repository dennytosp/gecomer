import { authentication } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { routes } from '../routes'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.SIGN_IN} component={authentication.SignIn} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={authentication.ForgotPassword}
      />
      <Stack.Screen name={routes.SIGN_UP} component={authentication.SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack
