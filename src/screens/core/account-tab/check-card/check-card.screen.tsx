import { Method01 } from '@/assets'
import { CreditCardItem, Header } from '@/components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { FormCard } from '../components'
import { styles } from './check-card.style'

const CheckCard = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Lailyfa Febrina Card" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CreditCardItem
          style={[styles.wrapperCard]}
          method={Method01}
          code="6326912481249875"
          holder="DINH TIEN PHONG"
          time="12/2028"
        />

        <FormCard buttonTitle="Save" type="edit" />
      </ScrollView>
    </View>
  )
}

export default CheckCard
