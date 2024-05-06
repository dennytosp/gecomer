import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './show-only.component.style'

type Props = {
  style?: StyleProp<ViewStyle>
}

const ShowOnly = ({ style }: Props) => {
  return <View style={[styles.wrapperShowOnly, style]}></View>
}

export default ShowOnly
