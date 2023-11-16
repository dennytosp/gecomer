import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Texting from '../Texting'
import { styles } from './styles'

type Props = {
  title: string
  onPress?: () => void
  textButtonStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
}

const ButtonPrimary = (props: Props) => {
  const { title, onPress, textButtonStyle, style } = props

  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapperButton, style]}>
      <Texting title={title} textStyle={[styles.textButton, textButtonStyle]} />
    </TouchableOpacity>
  )
}

export default ButtonPrimary
