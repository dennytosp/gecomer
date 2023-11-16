import Texting from '@/components/Texting'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, View } from 'react-native'
import { styles } from './styles'
import { getSize } from '@/utils'

const Promotion = ({
  title,
  hours,
  minutes,
  seconds,
  image,
  onPress,
  marginBottom,
  style,
}) => {
  const [count, setCount] = useState(3)
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
    <Pressable
      onPress={onPress}
      style={{ ...styles.wrapperPromotion(marginBottom), ...style }}
    >
      <Image source={image} style={styles.imagePromotion} />

      <View style={styles.wrapperContentPromotion}>
        <Texting title={title} textStyle={[styles.textTitle]} />
      </View>

      <View style={styles.wrapperTime}>
        <Pressable style={styles.wrapperCardTime}>
          <Texting title={hours} textStyle={[styles.textBase]} />
        </Pressable>

        <Texting
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />

        <Pressable style={styles.wrapperCardTime}>
          <Texting title={minutes} textStyle={[styles.textBase]} />
        </Pressable>

        <Texting
          title=":"
          textStyle={[styles.text2Dots]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
        <Pressable style={styles.wrapperCardTime}>
          <Texting title={seconds} textStyle={[styles.textSeconds]} />
        </Pressable>
      </View>
    </Pressable>
  )
}

export default Promotion
