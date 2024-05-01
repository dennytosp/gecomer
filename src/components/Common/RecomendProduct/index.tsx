import Texting from '@/components/Texting'
import { COLORS } from '@/constants'
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
        <Texting title={title} textStyle={[styles.textTitle]} />
      </View>

      <View style={[styles.wrapperSubTitle]}>
        <Texting title={subtitle} textStyle={[{ color: COLORS.white }]} />
      </View>
    </Pressable>
  )
}

export default RecommendProduct
