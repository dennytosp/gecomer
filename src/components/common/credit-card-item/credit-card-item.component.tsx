import { ColorValue, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import Texting from '@/components/text/text.component'
import { COLORS, FONTS } from '@/constants'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'
import React, { FC } from 'react'
import { styles } from './credit-card-item.style'

type Props = {
  backgroundColor?: ColorValue | undefined
  method?: () => JSX.Element
  code: string
  holder: string
  time: string
  style?: StyleProp<ViewStyle>
}

const CreditCardItem: FC<Props> = ({
  backgroundColor,
  method,
  code,
  holder,
  time,
  style,
}) => {
  const convertStringToArray = (input: string, step: number = 4) => {
    const array: string[] = [...input].reduce<string[]>((acc, _, index) => {
      if (index % step === 0) {
        const item: string = input.substring(index, index + step)
        acc.push(item)
      }
      return acc
    }, [])

    // const array = input.match(/.{1,4}/g) || []
    return array
  }

  const newCode = convertStringToArray(code)

  return (
    <View
      style={[
        styles.wrapperCard,
        { backgroundColor: backgroundColor ?? COLORS.primary },
        style,
      ]}
    >
      <Pressable>{method}</Pressable>

      <View style={[AppStyles.rowCenterBetween]}>
        {newCode.map((item, index) => (
          <Texting
            key={'code-' + index}
            title={item}
            textStyle={[styles.textCode]}
            style={[styles.wrapTextCode]}
          />
        ))}
      </View>

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

export default CreditCardItem
