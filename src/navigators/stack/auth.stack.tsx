import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_SCREEN } from '@/screens'
import { RoutesAuthStack } from '../routes'
import { AuthStackParamsList } from '../types'
const Auth = createNativeStackNavigator<AuthStackParamsList>()

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen
        name={RoutesAuthStack.SIGN_IN}
        component={AUTH_SCREEN.SignIn}
      />
      <Auth.Screen
        name={RoutesAuthStack.FORGOT_PASSWORD}
        component={AUTH_SCREEN.ForgotPassword}
      />
      <Auth.Screen
        name={RoutesAuthStack.SIGN_UP}
        component={AUTH_SCREEN.SignUp}
      />
    </Auth.Navigator>
  )
}

export default AuthStack
