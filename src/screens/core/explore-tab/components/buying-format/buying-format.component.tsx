import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './buying-format.style'

type Props = {
  style?: StyleProp<ViewStyle>
}

const BuyingFormat = ({ style }: Props) => {
  return <View style={[styles.wrapperBuyingFormat, style]}></View>
}

export default BuyingFormat
