import { Tick } from '@/assets'
import { Remind } from '@/components'
import { routes } from '@/navigation/routes'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import styles from './purchase-success.style'

const PurchaseSuccess = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <View style={[styles.container]}>
      <Remind
        icon={Tick}
        title="Success"
        subtitle="Thank you for shopping using Gecomer"
        eventTitle="Back To Order"
        handleOnEvent={() => navigation.navigate(routes.COMMON)}
      />
    </View>
  )
}

export default PurchaseSuccess
