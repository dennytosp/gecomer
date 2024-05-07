import { SpeedImage } from '@/components/speed-image/speed-image.component'
import Text from '@/components/text/text.component'
import { useBackgroundTimer } from '@/context'
import { getSize } from '@/utils'
import React from 'react'
import {
  ImageRequireSource,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { Source } from 'react-native-fast-image'
import { styles } from './banner-promotion-item.style'

type Props = {
  title: string
  duration: number
  image: Source | ImageRequireSource
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const BannerPromotionItem = ({
  title,
  duration,
  image,
  onPress,
  style,
}: Props) => {
  const { days, hours, minutes, seconds } = useBackgroundTimer()

  return (
    <Pressable onPress={onPress} style={[style]}>
      <SpeedImage
        source={image}
        style={[styles.imagePromotion]}
        resizeMode="cover"
      />
      <View style={[styles.wrapperContentPromotion]}>
        <Text title={title} textStyle={[styles.textTitle]} />
      </View>

      <View style={[styles.wrapperTime]}>
        <Pressable style={[styles.wrapperCardTime]}>
          <Text title={hours} textStyle={[styles.textBase]} />
        </Pressable>

        <Text
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
        <Pressable style={[styles.wrapperCardTime]}>
          <Text title={minutes} textStyle={[styles.textBase]} />
        </Pressable>

        <Text
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
        <Pressable style={[styles.wrapperCardTime]}>
          <Text title={seconds} textStyle={[styles.textSeconds]} />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default BannerPromotionItem
