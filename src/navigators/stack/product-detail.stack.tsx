import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { home } from '@/screens'
import { RoutesProductDetailStack } from '../routes'
import { ProductDetailStackParamsList } from '../types'

const ProductDetail = createNativeStackNavigator<ProductDetailStackParamsList>()

const ProductDetailStack = () => {
  return (
    <ProductDetail.Navigator screenOptions={{ headerShown: false }}>
      <ProductDetail.Screen
        name={RoutesProductDetailStack.PRODUCT_DETAIL}
        component={home.ProductDetail}
      />
      <ProductDetail.Screen
        name={RoutesProductDetailStack.REVIEWS}
        component={home.Reviews}
      />
      <ProductDetail.Screen
        name={RoutesProductDetailStack.WRITE_REVIEW}
        component={home.WriteReview}
      />
    </ProductDetail.Navigator>
  )
}

export default ProductDetailStack
