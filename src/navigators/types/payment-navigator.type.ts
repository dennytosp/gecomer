import { RoutesPaymentStack } from '../routes'

export type PaymentStackParamsList = {
  [RoutesPaymentStack.PAYMENT_METHOD]: undefined
  [RoutesPaymentStack.CARD]: undefined
  [RoutesPaymentStack.PURCHASE_SUCCESS]: undefined
  [RoutesPaymentStack.ADD_CARD]: undefined
  [RoutesPaymentStack.COMPLETED_CARD]: undefined
  [RoutesPaymentStack.CREDIT_CARD]: undefined
  [RoutesPaymentStack.CHECK_CARD]: undefined
}
