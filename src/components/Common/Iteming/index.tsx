import Texting from '@/components/Texting'
import { getSize, width } from '@/utils'
import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = {
  left01: string
  left02: string
  left03: string
  left04: string
  right01: string
  right02: string
  right03: string
  right04: string
  textLeftStyle?: StyleProp<TextStyle>
  textRightStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

const Iteming = ({
  left01,
  left02,
  left03,
  left04,
  right01,
  right02,
  right03,
  right04,
  textLeftStyle,
  textRightStyle,
  style,
}: Props) => {
  
  const marginBottom = getSize.m(12)
  return (
    <View style={[styles.wrapperFooter, style]}>
      <View style={[styles.rowFooter, { marginBottom: marginBottom }]}>
        <Texting title={left01} />
        <Texting title={right01} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter, { marginBottom: marginBottom }]}>
        <Texting title={left02} />
        <Texting title={right02} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter, { marginBottom: marginBottom }]}>
        <Texting title={left03} />
        <Texting title={right03} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter]}>
        <Texting title={left04} textStyle={[textLeftStyle]} />
        <Texting
          title={right04}
          textStyle={[styles.textRight, { width: width / 2 }, textRightStyle]}
        />
      </View>
    </View>
  )
}

export default Iteming
