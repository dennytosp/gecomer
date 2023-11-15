import Texting from '@/components/Texting'
import { COLORS } from '@/constants'
import { getSize, width } from '@/utils'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'
const Iteming = ({
  left01,
  left02,
  left03,
  left04,
  right01,
  right02,
  right03,
  right04,
  colorLeft04,
  colorRight04,
  fontLef04,
  fontRight04,
  style,
}) => {
  const marginBottom = getSize.m(12)
  return (
    <View style={{ ...styles.wrapperFooter, ...style }}>
      <View style={{ ...styles.rowFooter, marginBottom: marginBottom }}>
        <Texting title={left01} />
        <Texting title={right01} color={COLORS.secondary} />
      </View>
      <View style={{ ...styles.rowFooter, marginBottom: marginBottom }}>
        <Texting title={left02} />
        <Texting title={right02} color={COLORS.secondary} />
      </View>
      <View style={{ ...styles.rowFooter, marginBottom: marginBottom }}>
        <Texting title={left03} />
        <Texting title={right03} color={COLORS.secondary} />
      </View>
      <View style={{ ...styles.rowFooter }}>
        <Texting
          color={colorLeft04 && colorLeft04}
          fontFamily={fontLef04 && fontLef04}
          title={left04}
        />
        <Texting
          title={right04}
          color={colorRight04 ? colorRight04 : COLORS.secondary}
          width={width / 2}
          textAlign="right"
          fontFamily={fontRight04 && fontRight04}
        />
      </View>
    </View>
  )
}

export default Iteming
