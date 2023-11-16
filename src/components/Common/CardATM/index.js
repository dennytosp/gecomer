import Texting from '@/components/Texting'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const CardATM = ({ backgroundColor, method, code, holder, time, style }) => {
  return (
    <View
      style={[
        styles.wrapperCard,
        { backgroundColor: backgroundColor ? backgroundColor : COLORS.primary },
        style,
      ]}
    >
      {method}

      <Texting
        title={code}
        textStyle={[styles.textCode]}
        style={[styles.wrapTextCode]}
      />

      <View style={styles.wrapperRow}>
        <View style={styles.row01}>
          <Texting title="CARD HOLDER" textStyle={[styles.textBase]} />
          <Texting
            title={holder}
            textStyle={[styles.textBase, { fontFamily: FONTS.bold }]}
          />
        </View>

        <View style={styles.row02}>
          <Texting title="CARD SAVE" textStyle={[styles.textBase]} />
          <Texting
            title={time}
            fontSize={getSize.m(10)}
            textStyle={[styles.textBase, { fontFamily: FONTS.bold }]}
          />
        </View>
      </View>
    </View>
  )
}

export default CardATM
