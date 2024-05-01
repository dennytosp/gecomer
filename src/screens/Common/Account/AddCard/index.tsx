import { Header } from '@/components'
import React from 'react'
import { View } from 'react-native'
import { FormCard } from '../components'
import { styles } from './styles'

const AddCard = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Add Card" topLine />
      <FormCard titleButton="Add Card" type="add" />
    </View>
  )
}

export default AddCard
