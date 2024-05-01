import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Texting from '../Texting'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
  title: string
  onPress?: () => void
  atBottom?: boolean
  textButtonStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

const ButtonPrimary = (props: Props) => {
  const { title, onPress, atBottom, textButtonStyle, style } = props
  const insets = useSafeAreaInsets()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapperButton,
        atBottom && { marginBottom: insets.bottom },
        style,
      ]}
    >
      <Texting title={title} textStyle={[styles.textButton, textButtonStyle]} />
    </TouchableOpacity>
  )
}

export default ButtonPrimary
