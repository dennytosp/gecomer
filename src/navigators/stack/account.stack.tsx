import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ACCOUNT_SCREEN } from '@/screens'
import { RoutesAccountStack } from '../routes'
import { AccountStackParamsList } from '../types'

const Account = createNativeStackNavigator<AccountStackParamsList>()

const AccountStack = () => {
  return (
    <Account.Navigator screenOptions={{ headerShown: false }}>
      <Account.Screen
        name={RoutesAccountStack.ACCOUNT}
        component={ACCOUNT_SCREEN.Account}
      />
      <Account.Screen
        name={RoutesAccountStack.PROFILE}
        component={ACCOUNT_SCREEN.Profile}
      />
      <Account.Screen
        name={RoutesAccountStack.EDIT_PROFILE}
        component={ACCOUNT_SCREEN.EditProfile}
      />
      <Account.Screen
        name={RoutesAccountStack.CHANGE_PASSWORD}
        component={ACCOUNT_SCREEN.ChangePassword}
      />
      <Account.Screen
        name={RoutesAccountStack.ORDER}
        component={ACCOUNT_SCREEN.Order}
      />
      <Account.Screen
        name={RoutesAccountStack.ORDER_DETAILS}
        component={ACCOUNT_SCREEN.OrderDetail}
      />
    </Account.Navigator>
  )
}

export default AccountStack
