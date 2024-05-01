import { Texting, Titling } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

const Condition = ({ style }: Props) => {
  return (
    <View style={[styles.wrapperCondition, style]}>
      <Titling title="Condition" />

      <View style={[styles.wrapperRow]}>
        <Pressable style={[styles.notClick]}>
          <Texting title="New" />
        </Pressable>

        <Pressable style={[styles.clicked, { marginHorizontal: getSize.m(8) }]}>
          <Texting title="Used" textStyle={[styles.textBase]} />
        </Pressable>

        <Pressable style={[styles.clicked]}>
          <Texting title="Not Specified" textStyle={[styles.textBase]} />
        </Pressable>
      </View>
    </View>
  )
}

export default Condition
