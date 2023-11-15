import Texting from '@/components/Texting'
import Titling from '@/components/Titling'
import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import styles from './styles'

const NotifList = ({ image, title, content, time, style }) => {
  return (
    <View style={{ ...style, ...styles.wrapperCenter }}>
      <Pressable>{image}</Pressable>
      <View style={styles.wrapperContentCenter}>
        <Titling title={title} marginBottom={getSize.m(8)} />
        <Texting
          title={content}
          textAlign="justify"
          marginBottom={getSize.m(8)}
        />
        <Texting
          title={time}
          fontSize={getSize.m(10)}
          color={COLORS.secondary}
        />
      </View>
    </View>
  )
}

export default NotifList
