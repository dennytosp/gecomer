import React, { useState } from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CancelFavorite, Delete, Favorited, LessCart, PlusCart } from '@/assets'
import Text from '@/components/text/text.component'
import { RoutesCommonStack, RoutesMainStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './cart-item.style'

type Props = {
  item: {
    image: ImageSourcePropType
    title: string
    price: string
    quantity: number
    isFavorite: boolean
  }
  index: number
  style?: StyleProp<ViewStyle>
}

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.COMMON_STACK>

const CartItem = ({ item, index, style }: Props) => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const [amount, setAmount] = useState(item.quantity)
  const [isFavorite, setIsFavorite] = useState(item.isFavorite)

  const onFavorite = () => {
    setIsFavorite(prev => !prev)
  }

  const onDelete = () => {
    navigation.navigate(RoutesMainStack.COMMON_STACK, {
      screen: RoutesCommonStack.CONFIRMATION,
    })
  }

  const onLess = () => {
    setAmount(prev => {
      if (prev > 0) {
        return prev - 1
      } else {
        return prev
      }
    })
  }

  const onPlus = () => {
    setAmount(prev => prev + 1)
  }

  return (
    <View style={[styles.wrapperHeader, style]}>
      <Image source={item.image} style={[styles.product]} />
      <View style={[styles.wrapperContentCard]}>
        <View style={[styles.rowColumn01]}>
          <View style={[]}>
            <Text
              title={item.title}
              textStyle={[styles.textTitle]}
              style={[{ marginRight: getSize.m(4) }]}
            />
          </View>

          <View style={[styles.rowRight01]}>
            <Pressable onPress={onFavorite} style={[styles.iconFavorited]}>
              {isFavorite ? Favorited : CancelFavorite}
            </Pressable>

            <Pressable onPress={onDelete} style={[styles.iconDelete]}>
              <Delete />
            </Pressable>
          </View>
        </View>

        <View style={[styles.rowColumn02]}>
          <Text title={item.price} textStyle={[styles.textPrice]} />

          <View style={[styles.rowRight02]}>
            <Pressable onPress={onLess} style={[styles.iconLess]}>
              <LessCart />
            </Pressable>

            <Text title={Number(amount)} textStyle={[styles.textQuantity]} />

            <Pressable onPress={onPlus} style={[styles.iconPlus]}>
              <PlusCart />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem
