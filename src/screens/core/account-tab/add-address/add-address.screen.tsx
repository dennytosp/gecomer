import { Header } from '@/components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { AddressSubmitForm } from '../components'
import { styles } from './add-address.style'
import { ParamListBase, RouteProp } from '@react-navigation/native'

type Props = {
  route: RouteProp<ParamListBase>
}

const AddAddress = ({ route }: Props) => {
  const params = route.params
  const { addressTitle } = params as { addressTitle: string }

  return (
    <View style={[styles.container]}>
      <Header title={addressTitle} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <AddressSubmitForm buttonTitle={addressTitle} />
      </ScrollView>
    </View>
  )
}

export default AddAddress
