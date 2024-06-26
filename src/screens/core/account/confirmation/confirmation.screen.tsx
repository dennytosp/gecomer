import { Confirmationion } from '@/assets'
import { Remind } from '@/components'
import { COLORS } from '@/theme'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import styles from './confirmation.style'

const ConfirmationScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <View style={[styles.container]}>
      <Remind
        icon={Confirmationion}
        background={COLORS.pale_red}
        title="Confirmation"
        subtitle="Are you sure wanna delete address"
        eventTitle="Delete"
        cancelTitle="Cancel"
        handleOnEvent={() => navigation.goBack()}
        handleOnCancel={() => navigation.goBack()}
      />
    </View>
  )
}

export default ConfirmationScreen
