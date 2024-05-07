import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { common } from '@/screens'
import { RoutesOfferStack } from '../routes'
import { OfferStackParamsList } from '../types'

const Offer = createNativeStackNavigator<OfferStackParamsList>()

const OfferStack = () => {
  return (
    <Offer.Navigator screenOptions={{ headerShown: false }}>
      <Offer.Screen name={RoutesOfferStack.OFFER} component={common.Offer} />
    </Offer.Navigator>
  )
}

export default OfferStack
