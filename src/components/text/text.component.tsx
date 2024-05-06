import React from 'react'
import {
  StyleProp,
  Text as RNText,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './text.style'

type Props = {
  title: React.ReactNode | undefined
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  inputProps?: TextInputProps
}

const Text = (props: Props) => {
  const { title, textStyle, style, inputProps } = props

  return (
    <View style={[styles.container, style]}>
      <RNText style={[styles.text, textStyle]} {...inputProps}>
        {title}
      </RNText>
    </View>
  )
}

export default Text
