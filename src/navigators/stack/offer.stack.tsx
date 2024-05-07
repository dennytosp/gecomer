import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TAB_SCREEN } from '@/screens'
import { RoutesOfferStack } from '../routes'
import { OfferStackParamsList } from '../types'

const Offer = createNativeStackNavigator<OfferStackParamsList>()

const OfferStack = () => {
  return (
    <Offer.Navigator screenOptions={{ headerShown: false }}>
      <Offer.Screen
        name={RoutesOfferStack.OFFER}
        component={TAB_SCREEN.Offer}
      />
    </Offer.Navigator>
  )
}

export default OfferStack
