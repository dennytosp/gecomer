import Texting from '@/components/Texting'
import Titling from '@/components/Titling'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import { styles } from './styles'

const NotifList = ({ image, title, content, time, style }) => {
  return (
    <View style={{ ...style, ...styles.wrapperCenter }}>
      <Pressable>{image}</Pressable>

      <View style={styles.wrapperContentCenter}>
        <Titling title={title} style={[{ marginBottom: getSize.m(8) }]} />

        <Texting
          title={content}
          textStyle={[styles.textContent]}
          style={[{ marginBottom: getSize.m(8) }]}
        />
        <Texting title={time} textStyle={[styles.textTime]} />
      </View>
    </View>
  )
}

export default NotifList
