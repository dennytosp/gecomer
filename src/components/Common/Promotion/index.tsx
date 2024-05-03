import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import Texting from '@/components/Texting'
import { useBackgroundTimer } from '@/context'
import { getSize } from '@/utils'
import { styles } from './styles'

type Props = {
  title: string
  duration: number
  image: ImageSourcePropType
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const Promotion = ({ title, duration, image, onPress, style }: Props) => {
  const { days, hours, minutes, seconds } = useBackgroundTimer()

  return (
    <Pressable onPress={onPress} style={[style]}>
      <Image source={image} style={[styles.imagePromotion]} />
      <View style={[styles.wrapperContentPromotion]}>
        <Texting title={title} textStyle={[styles.textTitle]} />
      </View>

      <View style={[styles.wrapperTime]}>
        <Pressable style={[styles.wrapperCardTime]}>
          <Texting title={hours} textStyle={[styles.textBase]} />
        </Pressable>

        <Texting
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
        <Pressable style={[styles.wrapperCardTime]}>
          <Texting title={minutes} textStyle={[styles.textBase]} />
        </Pressable>

        <Texting
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
        <Pressable style={[styles.wrapperCardTime]}>
          <Texting title={seconds} textStyle={[styles.textSeconds]} />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default Promotion
