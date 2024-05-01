import { Method01 } from '@/assets'
import { CardATM, Header } from '@/components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { FormCard } from '../../components'
import { styles } from './styles'

const CheckCard = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Lailyfa Febrina Card" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CardATM
          style={[styles.wrapperCard]}
          method={Method01}
          code="6326    9124    8124    9875"
          holder="DINH TIEN PHONG"
          time="12/2028"
        />

        <FormCard titleButton="Save" type="edit" />
      </ScrollView>
    </View>
  )
}

export default CheckCard
