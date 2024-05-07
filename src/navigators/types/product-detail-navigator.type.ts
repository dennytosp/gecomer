import { ProductDetailParams } from '../params'
import { RoutesProductDetailStack } from '../routes'

export type ProductDetailStackParamsList = {
  [RoutesProductDetailStack.PRODUCT_DETAIL]: ProductDetailParams
  [RoutesProductDetailStack.REVIEWS]: undefined
  [RoutesProductDetailStack.WRITE_REVIEW]: undefined
}

export type ProductItemParams = {}
