import { ButtonPrimary, Header } from '@/components'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FormProfile } from '../../components'
import styles from './styles'

const EditUserInformation = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [gender, setGender] = useState()
  const [birthday, setBirthday] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormProfile
          FirstName={[firstName, setFirstName]}
          LastName={[lastName, setLastName]}
          Gender={[gender, setGender]}
          Birthdayng={[birthday, setBirthday]}
          Email={[email, setEmail]}
          PhoneNumbers={[phoneNumber, setPhoneNumber]}
        />
        <ButtonPrimary
          title="Save"
          onPress={() => navigation.goBack()}
          style={[{ marginBottom: getSize.m(16) }]}
        />
      </ScrollView>
    </View>
  )
}

export default EditUserInformation
