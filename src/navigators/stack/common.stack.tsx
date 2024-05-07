import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COMMON_SCREEN } from '@/screens'
import { RoutesCommonStack } from '../routes'
import { CommonStackParamsList } from '../types'

const Common = createNativeStackNavigator<CommonStackParamsList>()

const CommonStack = () => {
  return (
    <Common.Navigator screenOptions={{ headerShown: false }}>
      <Common.Screen
        name={RoutesCommonStack.ONBOARD}
        component={COMMON_SCREEN.Onboard}
      />
      <Common.Screen
        name={RoutesCommonStack.ADDRESS}
        component={COMMON_SCREEN.Address}
      />
      <Common.Screen
        name={RoutesCommonStack.ADDRESS_INPUT}
        component={COMMON_SCREEN.AddressInput}
      />
      <Common.Screen
        name={RoutesCommonStack.PRODUCT_SEE_MORE}
        component={COMMON_SCREEN.ProductSeeMore}
      />
      <Common.Screen
        name={RoutesCommonStack.CONFIRMATION}
        component={COMMON_SCREEN.Confirmation}
      />
    </Common.Navigator>
  )
}

export default CommonStack
