import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { account, cart } from '@/screens'
import { RoutesPaymentStack } from '../routes'
import { PaymentStackParamsList } from '../types'

const Payment = createNativeStackNavigator<PaymentStackParamsList>()

const PaymentStack = () => {
  return (
    <Payment.Navigator screenOptions={{ headerShown: false }}>
      <Payment.Screen
        name={RoutesPaymentStack.PAYMENT_METHOD}
        component={cart.PaymentMethod}
      />
      <Payment.Screen name={RoutesPaymentStack.CARD} component={cart.Card} />
      <Payment.Screen
        name={RoutesPaymentStack.PURCHASE_SUCCESS}
        component={cart.PurchaseSuccess}
      />
      <Payment.Screen
        name={RoutesPaymentStack.ADD_CARD}
        component={account.AddCard}
      />
      <Payment.Screen
        name={RoutesPaymentStack.CREDIT_CARD}
        component={account.CreditCard}
      />
      <Payment.Screen
        name={RoutesPaymentStack.CHECK_CARD}
        component={account.CheckCard}
      />
    </Payment.Navigator>
  )
}

export default PaymentStack
