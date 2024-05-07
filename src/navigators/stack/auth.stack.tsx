import { authentication } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { RoutesAuthStack } from '../routes'
import { AuthStackParamsList } from '../types'

const Auth = createNativeStackNavigator<AuthStackParamsList>()

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen
        name={RoutesAuthStack.SIGN_IN}
        component={authentication.SignIn}
      />
      <Auth.Screen
        name={RoutesAuthStack.FORGOT_PASSWORD}
        component={authentication.ForgotPassword}
      />
      <Auth.Screen
        name={RoutesAuthStack.SIGN_UP}
        component={authentication.SignUp}
      />
    </Auth.Navigator>
  )
}

export default AuthStack
