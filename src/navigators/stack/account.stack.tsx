import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { account } from '@/screens'
import { RoutesAccountStack } from '../routes'
import { AccountStackParamsList } from '../types'

const Account = createNativeStackNavigator<AccountStackParamsList>()

const AccountStack = () => {
  return (
    <Account.Navigator screenOptions={{ headerShown: false }}>
      <Account.Screen
        name={RoutesAccountStack.PROFILE}
        component={account.Profile}
      />
      <Account.Screen
        name={RoutesAccountStack.EDIT_PROFILE}
        component={account.EditProfile}
      />
      <Account.Screen
        name={RoutesAccountStack.CHANGE_PASSWORD}
        component={account.ChangePassword}
      />
      <Account.Screen
        name={RoutesAccountStack.ORDER}
        component={account.Order}
      />
      <Account.Screen
        name={RoutesAccountStack.ORDER_DETAILS}
        component={account.OrderDetails}
      />
    </Account.Navigator>
  )
}

export default AccountStack
