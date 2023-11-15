import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { View } from 'react-native'
import Texting from '../Texting'
import styles from './styles'

const Titling = ({
  style,
  title,
  more,
  fontSize,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingHorizontal,
  paddingVertical,
  textAlign,
  color,
  backgroundColor,
  onPress,
}) => {
  return (
    <View
      style={{
        ...styles.wrapperHeaderTitling(
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingHorizontal,
          paddingVertical,
        ),
        ...style,
      }}
    >
      <Texting
        title={title}
        color={color ? color : COLORS.secondary}
        textAlign={textAlign}
        fontSize={fontSize ? fontSize : getSize.m(14)}
        fontFamily={FONTS.bold}
        backgroundColor={backgroundColor}
      />
      {more ? (
        <Texting
          title={more}
          onPress={onPress}
          color={COLORS.primary}
          fontSize={fontSize ? fontSize : getSize.m(14)}
          fontFamily={FONTS.bold}
        />
      ) : null}
    </View>
  )
}

export default Titling
