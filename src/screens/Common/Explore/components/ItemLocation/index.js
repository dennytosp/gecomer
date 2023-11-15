import React from 'react'
import { View, Pressable, FlatList } from 'react-native'
import styles from './styles'
import {
  ButtonPrimary,
  ProductsHorizontal,
  ReviewsProduct,
  StarRating,
  Texting,
  Titling,
} from '@/components'
import { getSize, width } from '@/utils'
import { Favorite } from '@/assets'
import { COLORS, FONTS } from '@/constants'
import { DATA_SIZES, DATA_COLORS, PRODUCTS_DATA } from '@/assets'
import { photos } from '@/assets'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@/navigation/routes'

const ItemLocation = ({ style }) => {
  return <View style={{ ...styles.wrapperItemLocation, ...style }}></View>
}

export default ItemLocation
