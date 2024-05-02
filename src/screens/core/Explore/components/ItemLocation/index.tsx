import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

const ItemLocation = ({ style }: Props) => {
  return <View style={[styles.wrapperItemLocation, style]}></View>
}

export default ItemLocation
