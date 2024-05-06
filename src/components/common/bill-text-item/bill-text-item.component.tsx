import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import Text from '@/components/text/text.component'
import { getSize, width } from '@/utils'
import { styles } from './bill-text-item.style'

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

const BillTextItem = ({
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
        <Text title={left01} />
        <Text title={right01} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter, { marginBottom: marginBottom }]}>
        <Text title={left02} />
        <Text title={right02} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter, { marginBottom: marginBottom }]}>
        <Text title={left03} />
        <Text title={right03} textStyle={[styles.textBase]} />
      </View>

      <View style={[styles.rowFooter]}>
        <Text title={left04} textStyle={[textLeftStyle]} />
        <Text
          title={right04}
          textStyle={[styles.textRight, { width: width / 2 }, textRightStyle]}
        />
      </View>
    </View>
  )
}

export default BillTextItem
