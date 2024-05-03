import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Texting from '../Texting'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '@/constants'

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
        atBottom && { marginBottom: insets.bottom },
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
