import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const ShowOnly = ({ style }) => {
  return <View style={{ ...styles.wrapperShowOnly, ...style }}></View>
}

export default ShowOnly
