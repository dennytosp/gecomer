import StarRating from '@/components/star-rating/star-rating.component'
import Texting from '@/components/text/text.component'
import { routes } from '@/navigation/routes'
import { getSize, width } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './product-item.style'

type Props = {
  item: {
    image: ImageSourcePropType
    name: string
    discounted: string
    price: string
    promotion?: string
  }
  index?: number
  columns?: number
  marginBottom?: DimensionValue | undefined
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const ProductItem = ({
  item,
  marginBottom,
  index,
  columns,
  onPress,
  style,
}: Props) => {
  const { image, name, discounted, price, promotion } = item
  const columnsSize = width / Number(columns) - getSize.m(20 + 32)
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const onHandleProductItem = () => {
    if (onPress) return onPress()
    navigation.navigate(routes.DETAILS, { item })
  }

  return (
    <Pressable
      onPress={onHandleProductItem}
      style={[
        styles.wrapperProduct,
        Number(columns) > 1 && {
          width: width / Number(columns) - getSize.m(16 + 6),
        },
        { marginBottom },
        style,
      ]}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={image}
          style={[
            styles.imageProducts,
            {
              width: columns ? columnsSize : getSize.m(110),
              height: columns ? columnsSize : getSize.m(110),
            },
          ]}
        />
      </View>

      <Texting
        title={name}
        textStyle={[
          styles.textName,
          { width: columns ? columnsSize : getSize.s(110) },
        ]}
        inputProps={{ numberOfLines: 2 }}
      />

      {columns && <StarRating startingValue={4} imageSize={12} />}

      <Texting
        title={discounted}
        textStyle={[styles.textBase]}
        style={[
          {
            marginTop: columns ? getSize.m(12) : getSize.m(8),
            marginBottom: columns ? getSize.m(4) : getSize.m(8),
          },
        ]}
      />

      <View style={[styles.wrapperRowPrice]}>
        <Texting title={price} textStyle={[styles.textPrice]} />
        {promotion && (
          <Texting
            title={promotion}
            textStyle={[styles.textPromotion]}
            style={[{ marginLeft: getSize.m(8) }]}
          />
        )}
      </View>
    </Pressable>
  )
}

export default ProductItem
