import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable } from 'react-native'
import Texting from '../Texting'
import styles from './styles'

const ButtonPrimary = ({
  title,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...style,
        ...styles.wrapperButton(
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
        ),
      }}
    >
      <Texting
        title={title}
        fontFamily={FONTS.bold}
        fontSize={getSize.m(14)}
        color={COLORS.white}
        paddingVertical={getSize.m(16)}
      />
    </Pressable>
  )
}

export default ButtonPrimary
