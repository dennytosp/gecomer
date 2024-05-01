import StarRating from '@/components/StarRating'
import Texting from '@/components/Texting'
import { getSize, width } from '@/utils'
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
import { styles } from './styles'

type Props = {
  image: ImageSourcePropType
  name: string
  discounted: string
  price: string
  index?: number
  columns?: number
  promotion?: string
  marginBottom?: DimensionValue | undefined
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const ProductsHorizontal = ({
  image,
  name,
  discounted,
  price,
  index,
  columns,
  promotion,
  marginBottom,
  onPress,
  style,
}: Props) => {
  const columnsSize = width / columns - getSize.m(20 + 32)

  return (
    <View
      style={[
        styles.wrapperProduct,
        columns > 1 && {
          width: width / columns - getSize.m(16 + 6),
        },
        { marginBottom, marginLeft: index },
        style,
      ]}>
      <Pressable onPress={onPress} style={{ alignItems: 'center' }}>
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
      </Pressable>

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
        <Texting
          title={promotion}
          textStyle={[styles.textPromotion]}
          style={[{ marginLeft: getSize.m(8) }]}
        />
      </View>
    </View>
  )
}

export default ProductsHorizontal
