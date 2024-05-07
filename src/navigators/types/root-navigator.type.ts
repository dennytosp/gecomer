import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RoutesMainStack } from '../routes'
import {
  AccountStackParamsList,
  AuthStackParamsList,
  CartStackParamsList,
  CommonStackParamsList,
  ExploreStackParamsList,
  NotificationStackParamsList,
  OfferStackParamsList,
  PaymentStackParamsList,
  ProductDetailStackParamsList,
  SearchStackParamsList,
  TabStackParamsList,
} from '../types'

type RootStackParamList = {
  [RoutesMainStack.TAB_STACK]:
    | NavigatorScreenParams<TabStackParamsList>
    | undefined
  [RoutesMainStack.AUTH_STACK]:
    | NavigatorScreenParams<AuthStackParamsList>
    | undefined
  [RoutesMainStack.ACCOUNT_STACK]:
    | NavigatorScreenParams<AccountStackParamsList>
    | undefined
  [RoutesMainStack.CART_STACK]:
    | NavigatorScreenParams<CartStackParamsList>
    | undefined
  [RoutesMainStack.COMMON_STACK]:
    | NavigatorScreenParams<CommonStackParamsList>
    | undefined
  [RoutesMainStack.EXPLORE_STACK]:
    | NavigatorScreenParams<ExploreStackParamsList>
    | undefined
  [RoutesMainStack.NOTIFICATION_STACK]:
    | NavigatorScreenParams<NotificationStackParamsList>
    | undefined
  [RoutesMainStack.OFFER_STACK]:
    | NavigatorScreenParams<OfferStackParamsList>
    | undefined
  [RoutesMainStack.PAYMENT_STACK]:
    | NavigatorScreenParams<PaymentStackParamsList>
    | undefined
  [RoutesMainStack.PRODUCT_DETAIL_STACK]:
    | NavigatorScreenParams<ProductDetailStackParamsList>
    | undefined
  [RoutesMainStack.SEARCH_STACK]:
    | NavigatorScreenParams<SearchStackParamsList>
    | undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}

    type RootStackNavigationProps = NativeStackScreenProps<RootStackParamList>

    type RootStackScreenProps<T extends keyof RootStackParamList> =
      NativeStackScreenProps<RootStackParamList, T>
  }
}

export type { RootStackParamList }
