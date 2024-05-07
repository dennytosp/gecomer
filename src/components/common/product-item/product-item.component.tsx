import React from 'react'
import {
  DimensionValue,
  ImageRequireSource,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { Source } from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import { SpeedImage } from '@/components/speed-image/speed-image.component'
import StarRating from '@/components/star-rating/star-rating.component'
import Text from '@/components/text/text.component'
import { RoutesMainStack, RoutesProductDetailStack } from '@/navigators/routes'
import { getSize, width } from '@/utils'
import { styles } from './product-item.style'

type Props = {
  item: {
    image: Source | ImageRequireSource
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

type NavigationProps = ReactNavigation.RootStackNavigationProps

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
  const navigation = useNavigation<NavigationProps['navigation']>()

  const onHandleProductItem = () => {
    if (onPress) return onPress()
    navigation.navigate(RoutesMainStack.PRODUCT_DETAIL_STACK, {
      screen: RoutesProductDetailStack.PRODUCT_DETAIL,
      params: { item },
    })
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
        <SpeedImage
          resizeMode="cover"
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

      <Text
        title={name}
        textStyle={[
          styles.textName,
          { width: columns ? columnsSize : getSize.s(110) },
        ]}
        inputProps={{ numberOfLines: 2 }}
      />

      {columns && <StarRating startingValue={4} imageSize={12} />}

      <Text
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
        <Text title={price} textStyle={[styles.textPrice]} />
        {promotion && (
          <Text
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
