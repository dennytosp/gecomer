import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Tick } from '@/assets'
import { Remind } from '@/components'
import { RoutesMainStack } from '@/navigators/routes'
import styles from './purchase-success.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.PAYMENT_STACK>

const PurchaseSuccessScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  return (
    <View style={[styles.container]}>
      <Remind
        icon={Tick}
        title="Success"
        subtitle="Thank you for shopping using Gecomer"
        eventTitle="Back To Order"
        handleOnEvent={() => navigation.navigate(RoutesMainStack.TAB_STACK)}
      />
    </View>
  )
}

export default PurchaseSuccessScreen
