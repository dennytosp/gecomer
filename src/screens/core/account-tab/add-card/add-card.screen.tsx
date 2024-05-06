import { Header } from '@/components'
import React from 'react'
import { View } from 'react-native'
import { FormCard } from '../components'
import { styles } from './add-card.style'

const AddCard = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Add Card" topLine />
      <FormCard buttonTitle="Add Card" type="add" />
    </View>
  )
}

export default AddCard
