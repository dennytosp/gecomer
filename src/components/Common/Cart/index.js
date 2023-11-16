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
import { Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const Cart = ({
  image,
  title,
  price,
  favorited,
  quantity,
  handleDelete,
  handleFavorite,
  handleLess,
  hanldePlus,
  style,
}) => {
  return (
    <View style={[styles.wrapperHeader, style]}>
      <Image source={image} style={styles.product} />
      <View style={styles.wrapperContentCard}>
        <View style={styles.rowColumn01}>
          <View style={[]}>
            <Texting
              title={title}
              textStyle={[styles.textTitle]}
              style={[{ marginRight: getSize.m(4) }]}
            />
          </View>

          <View style={styles.rowRight01}>
            <Pressable onPress={handleFavorite} style={styles.iconFavorited}>
              {favorited ? Favorited : CancelFavorite}
            </Pressable>

            <Pressable onPress={handleDelete} style={styles.iconDelete}>
              <Delete />
            </Pressable>
          </View>
        </View>

        <View style={styles.rowColumn02}>
          <Texting title={price} textStyle={[styles.textPrice]} />

          <View style={styles.rowRight02}>
            <Pressable onPress={handleLess} style={styles.iconLess}>
              <Less_Cart />
            </Pressable>

            <Texting
              title={quantity}
              textStyle={[styles.textQuantity]}
              style={[{ width: getSize.m(4) }]}
            />

            <Pressable onPress={hanldePlus} style={styles.iconPlus}>
              <Plus_Cart />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Cart
