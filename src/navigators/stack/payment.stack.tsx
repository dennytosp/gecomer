import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PAYMENT_SCREEN } from '@/screens'
import { RoutesPaymentStack } from '../routes'
import { PaymentStackParamsList } from '../types'

const Payment = createNativeStackNavigator<PaymentStackParamsList>()

const PaymentStack = () => {
  return (
    <Payment.Navigator screenOptions={{ headerShown: false }}>
      <Payment.Screen
        name={RoutesPaymentStack.PAYMENT_METHOD}
        component={PAYMENT_SCREEN.PaymentMethod}
      />
      <Payment.Screen
        name={RoutesPaymentStack.CARD}
        component={PAYMENT_SCREEN.Card}
      />
      <Payment.Screen
        name={RoutesPaymentStack.PURCHASE_SUCCESS}
        component={PAYMENT_SCREEN.PurchaseSuccess}
      />
      <Payment.Screen
        name={RoutesPaymentStack.ADD_CARD}
        component={PAYMENT_SCREEN.AddCard}
      />
      <Payment.Screen
        name={RoutesPaymentStack.CREDIT_CARD}
        component={PAYMENT_SCREEN.CreditCard}
      />
      <Payment.Screen
        name={RoutesPaymentStack.CHECK_CARD}
        component={PAYMENT_SCREEN.CheckCard}
      />
    </Payment.Navigator>
  )
}

export default PaymentStack
