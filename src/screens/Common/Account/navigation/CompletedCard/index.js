import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Header } from '@/components'
import { Add_Ship } from '@/assets'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@/navigation/routes'

const CompletedCard = () => {
  const navigation = useNavigation()

  const _renderContent = () => {
    return <View style={styles.wrapperContent}></View>
  }
  return (
    <View style={styles.container}>
      <Header title="Lailyfa Febrina Card" />
    </View>
  )
}

export default CompletedCard
