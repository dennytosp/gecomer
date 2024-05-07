import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PRODUCT_DETAIL_SCREEN } from '@/screens'
import { RoutesProductDetailStack } from '../routes'
import { ProductDetailStackParamsList } from '../types'

const ProductDetail = createNativeStackNavigator<ProductDetailStackParamsList>()

const ProductDetailStack = () => {
  return (
    <ProductDetail.Navigator screenOptions={{ headerShown: false }}>
      <ProductDetail.Screen
        name={RoutesProductDetailStack.PRODUCT_DETAIL}
        component={PRODUCT_DETAIL_SCREEN.ProductDetail}
      />
      <ProductDetail.Screen
        name={RoutesProductDetailStack.REVIEWS}
        component={PRODUCT_DETAIL_SCREEN.Reviews}
      />
      <ProductDetail.Screen
        name={RoutesProductDetailStack.WRITE_REVIEW}
        component={PRODUCT_DETAIL_SCREEN.WriteReview}
      />
    </ProductDetail.Navigator>
  )
}

export default ProductDetailStack
