import React from 'react'
import {
  StyleProp,
  Text,
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

const Texting = (props: Props) => {
  const { title, textStyle, style, inputProps } = props

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]} {...inputProps}>
        {title}
      </Text>
    </View>
  )
}

export default Texting
