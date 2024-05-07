import { AddressInputParams, AddressParams, ProductSeeMore } from '../params'
import { RoutesCommonStack } from '../routes'

export type CommonStackParamsList = {
  [RoutesCommonStack.ONBOARD]: undefined
  [RoutesCommonStack.PRODUCT_SEE_MORE]: ProductSeeMore
  [RoutesCommonStack.ADDRESS]?: AddressParams | undefined
  [RoutesCommonStack.ADDRESS_INPUT]: AddressInputParams
  [RoutesCommonStack.CONFIRMATION]: undefined
}
