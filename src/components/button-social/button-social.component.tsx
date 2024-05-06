import React from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import Text from '../text/text.component'
import styles from './button-social.style'

type Props = {
  icon: React.JSX.Element
  title: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const ButtonSocial = (props: Props) => {
  const { icon, title, onPress, style } = props

  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapperSocial, style]}>
      <View style={[styles.wrapperIconSocial]} children={icon} />
      <Text title={title} textStyle={[styles.textButton]} />
    </TouchableOpacity>
  )
}

export default ButtonSocial
