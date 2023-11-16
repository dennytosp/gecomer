import { ButtonPrimary, Header } from '@/components'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FormAddress } from '../../components'
import styles from './styles'

const AddAddress = ({ route }) => {
  const navigation = useNavigation()
  const { add_address, edit_address } = route.params
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [addressBackup, setAddressBackup] = useState()
  const [zipCode, setZipCode] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  return (
    <View style={styles.container}>
      <Header title={add_address ? add_address : edit_address} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormAddress
          FirstName={[firstName, setFirstName]}
          LastName={[lastName, setLastName]}
          Address={[address, setAddress]}
          AddressBackup={[addressBackup, setAddressBackup]}
          ZipCode={[zipCode, setZipCode]}
          PhoneNumber={[phoneNumber, setPhoneNumber]}
        />
        <ButtonPrimary
          title="Save Address"
          onPress={() => navigation.goBack()}
          style={[{ marginTop: getSize.m(16) }]}
        />
      </ScrollView>
    </View>
  )
}

export default AddAddress
