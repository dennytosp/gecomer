import { Header } from '@/components'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const CompletedCard = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderContent = () => {
    return <View style={[styles.wrapperContent]}></View>
  }

  return (
    <View style={[styles.container]}>
      <Header title="Lailyfa Febrina Card" />
    </View>
  )
}

export default CompletedCard
