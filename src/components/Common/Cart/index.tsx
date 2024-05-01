import {
  CancelFavorite,
  Delete,
  Favorited,
  Less_Cart,
  Plus_Cart,
} from '@/assets'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './styles'

type Props = {
  image: ImageSourcePropType
  title: string
  price: string
  favorited: boolean
  style?: StyleProp<ViewStyle>
  quantity: number
  handleDelete: () => void
  handleFavorite?: () => void
  handleLess?: () => void
  handlePlus?: () => void
}

const Cart = ({
  image,
  title,
  price,
  favorited,
  quantity,
  handleDelete,
  handleFavorite,
  handleLess,
  handlePlus,
  style,
}: Props) => {
  return (
    <View style={[styles.wrapperHeader, style]}>
      <Image source={image} style={[styles.product]} />
      <View style={[styles.wrapperContentCard]}>
        <View style={[styles.rowColumn01]}>
          <View style={[]}>
            <Texting
              title={title}
              textStyle={[styles.textTitle]}
              style={[{ marginRight: getSize.m(4) }]}
            />
          </View>

          <View style={[styles.rowRight01]}>
            <Pressable onPress={handleFavorite} style={[styles.iconFavorited]}>
              {favorited ? Favorited : CancelFavorite}
            </Pressable>

            <Pressable onPress={handleDelete} style={[styles.iconDelete]}>
              <Delete />
            </Pressable>
          </View>
        </View>

        <View style={[styles.rowColumn02]}>
          <Texting title={price} textStyle={[styles.textPrice]} />

          <View style={[styles.rowRight02]}>
            <Pressable onPress={handleLess} style={[styles.iconLess]}>
              <Less_Cart />
            </Pressable>

            <Texting
              title={String(quantity)}
              textStyle={[styles.textQuantity]}
            />

            <Pressable onPress={handlePlus} style={[styles.iconPlus]}>
              <Plus_Cart />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Cart
