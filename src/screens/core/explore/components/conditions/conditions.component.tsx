import { Text, Title } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './conditions.style'

type Props = {
  style?: StyleProp<ViewStyle>
}

const Condition = ({ style }: Props) => {
  return (
    <View style={[styles.wrapperCondition, style]}>
      <Title title="Condition" />

      <View style={[styles.wrapperRow]}>
        <Pressable style={[styles.notClick]}>
          <Text title="New" />
        </Pressable>

        <Pressable style={[styles.clicked, { marginHorizontal: getSize.m(8) }]}>
          <Text title="Used" textStyle={[styles.textBase]} />
        </Pressable>

        <Pressable style={[styles.clicked]}>
          <Text title="Not Specified" textStyle={[styles.textBase]} />
        </Pressable>
      </View>
    </View>
  )
}

export default Condition
