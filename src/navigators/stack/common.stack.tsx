import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { account, authentication, home } from '@/screens'
import { RoutesCommonStack } from '../routes'
import { CommonStackParamsList } from '../types'

const Common = createNativeStackNavigator<CommonStackParamsList>()

const CommonStack = () => {
  return (
    <Common.Navigator screenOptions={{ headerShown: false }}>
      <Common.Screen
        name={RoutesCommonStack.ONBOARD}
        component={authentication.Onboard}
      />
      <Common.Screen
        name={RoutesCommonStack.ADDRESS}
        component={account.Address}
      />
      <Common.Screen
        name={RoutesCommonStack.ADDRESS_INPUT}
        component={account.AddressInput}
      />
      <Common.Screen
        name={RoutesCommonStack.PRODUCT_SEE_MORE}
        component={home.ProductSeeMore}
      />
      <Common.Screen
        name={RoutesCommonStack.CONFIRMATION}
        component={account.Confirmation}
      />
    </Common.Navigator>
  )
}

export default CommonStack
