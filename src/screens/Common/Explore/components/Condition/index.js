import { Texting, Titling } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import styles from './styles'

const Condition = ({ style }) => {
  return (
    <View style={{ ...styles.wrapperCondition, ...style }}>
      <Titling title="Condition" />

      <View style={styles.wrapperRow}>
        <Pressable style={styles.notClick}>
          <Texting title="New" />
        </Pressable>

        <Pressable
          style={{ ...styles.clicked, marginHorizontal: getSize.m(8) }}
        >
          <Texting
            title="Used"
            fontFamily={FONTS.bold}
            color={COLORS.primary}
          />
        </Pressable>

        <Pressable style={styles.clicked}>
          <Texting
            title="Not Specified"
            fontFamily={FONTS.bold}
            color={COLORS.primary}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default Condition
