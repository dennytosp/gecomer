import { FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable } from 'react-native'
import Texting from '../Texting'
import styles from './styles'

const ButtonSocial = ({
  icon,
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
        ...styles.wrapperSocial(
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
      <Pressable style={styles.wrapperIconSocial}>{icon}</Pressable>
      <Texting
        title={title}
        fontFamily={FONTS.bold}
        paddingVertical={getSize.m(14)}
      />
    </Pressable>
  )
}

export default ButtonSocial
