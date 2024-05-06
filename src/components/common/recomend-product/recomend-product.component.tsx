import Text from '@/components/text/text.component'
import { COLORS } from '@/theme'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './recomend-product.style'

type Props = {
  image: ImageSourcePropType
  title: string
  subtitle: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const RecommendProduct = ({
  image,
  title,
  subtitle,
  onPress,
  style,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.wrapperRecommendProduct, style]}
    >
      <Image source={image} style={[styles.imageRecommend]} />

      <View style={[styles.wrapperTitle]}>
        <Text title={title} textStyle={[styles.textTitle]} />
      </View>

      <View style={[styles.wrapperSubTitle]}>
        <Text title={subtitle} textStyle={[{ color: COLORS.white }]} />
      </View>
    </Pressable>
  )
}

export default RecommendProduct
