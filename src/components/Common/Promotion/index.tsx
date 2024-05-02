import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React, { useEffect, useState } from 'react'
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
  title: string
  hours: string
  minutes: string
  seconds: string
  image: ImageSourcePropType
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const Promotion = ({
  title,
  hours,
  minutes,
  seconds,
  image,
  onPress,
  style,
}: Props) => {
  const [timerCount, setTimer] = useState(60)

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval)
        return lastTimerCount - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

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
