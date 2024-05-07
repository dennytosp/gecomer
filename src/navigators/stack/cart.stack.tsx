import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { common } from '@/screens'
import { RoutesCartStack } from '../routes'
import { CartStackParamsList } from '../types'

const Cart = createNativeStackNavigator<CartStackParamsList>()

const CartStack = () => {
  return (
    <Cart.Navigator screenOptions={{ headerShown: false }}>
      <Cart.Screen name={RoutesCartStack.CART} component={common.Cart} />
    </Cart.Navigator>
  )
}

export default CartStack
