import React from 'react'
import { Pressable, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Texting from '../Texting'
import styles from './styles'

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
      <Pressable style={styles.wrapperIconSocial} children={icon} />
      <Texting title={title} textStyle={[styles.textButton]} />
    </TouchableOpacity>
  )
}

export default ButtonSocial
