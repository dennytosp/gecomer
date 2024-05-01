import React from 'react'
import {
  Pressable,
  StyleProp,
  Text,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './style'

type Props = {
  title: string
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  inputProps?: TextInputProps
}

const Texting = (props: Props) => {
  const { title, onPress, textStyle, style, inputProps } = props

  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]} {...inputProps}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Texting
