import React from 'react'
import { Platform, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Texting from '../text/text.component'
import { styles } from './button-primary.style'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '@/constants'
import { getSize, isIos } from '@/utils'

type Props = {
  title: string
  onPress?: () => void
  atBottom?: boolean
  outline?: boolean
  textButtonStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

const ButtonPrimary = (props: Props) => {
  const {
    title,
    onPress,
    atBottom = true,
    outline,
    textButtonStyle,
    style,
  } = props
  const insets = useSafeAreaInsets()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapperButton,
        outline ? styles.outline : styles.shadow,
        atBottom && { marginBottom: isIos ? insets.bottom : getSize.m(16) },
        style,
      ]}
    >
      <Texting
        title={title}
        textStyle={[
          styles.textButton,
          outline && { color: COLORS.grey },
          textButtonStyle,
        ]}
      />
    </TouchableOpacity>
  )
}

export default ButtonPrimary
