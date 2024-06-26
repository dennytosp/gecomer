import Text from '@/components/text/text.component'
import Title from '@/components/title/title.component'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './notification-item.style'

type Props = {
  image: () => JSX.Element
  title: string
  content: string
  time: string
  style?: StyleProp<ViewStyle>
}

const NotificationItem = ({ image, title, content, time, style }: Props) => {
  return (
    <View style={[styles.wrapperCenter, style]}>
      <Pressable>{image}</Pressable>

      <View style={[styles.wrapperContentCenter]}>
        <Title title={title} style={[{ marginBottom: getSize.m(8) }]} />

        <Text
          title={content}
          textStyle={[styles.textContent]}
          style={[{ marginBottom: getSize.m(8) }]}
        />
        <Text title={time} textStyle={[styles.textTime]} />
      </View>
    </View>
  )
}

export default NotificationItem
