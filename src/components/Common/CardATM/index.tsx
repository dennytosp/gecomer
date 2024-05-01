import Texting from '@/components/Texting'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React, { FC } from 'react'
import { ColorValue, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { Pressable } from 'react-native'

type Props = {
  backgroundColor?: ColorValue | undefined
  method?: () => JSX.Element
  code: string
  holder: string
  time: string
  style?: StyleProp<ViewStyle>
}

const CardATM: FC<Props> = ({
  backgroundColor,
  method,
  code,
  holder,
  time,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapperCard,
        { backgroundColor: backgroundColor ?? COLORS.primary },
        style,
      ]}>
      <Pressable>{method}</Pressable>

      <Texting
        title={code}
        textStyle={[styles.textCode]}
        style={[styles.wrapTextCode]}
      />

      <View style={[styles.wrapperRow]}>
        <View style={[styles.row01]}>
          <Texting title="CARD HOLDER" textStyle={[styles.textBase]} />
          <Texting
            title={holder}
            textStyle={[styles.textBase, { fontFamily: FONTS.bold }]}
          />
        </View>

        <View style={[styles.row02]}>
          <Texting title="CARD SAVE" textStyle={[styles.textBase]} />
          <Texting
            title={time}
            textStyle={[
              styles.textBase,
              { fontFamily: FONTS.bold, fontSize: getSize.m(10) },
            ]}
          />
        </View>
      </View>
    </View>
  )
}

export default CardATM
