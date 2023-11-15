import { DATA_PAYMENT } from '@/assets'
import { EventList, Header } from '@/components'
import { getSize, width } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const PaymentMethod = () => {
  const navigation = useNavigation()
  const _renderCenter = ({ item }) => {
    return (
      <View style={styles.wrapperCenter}>
        <EventList
          icon={item.icon}
          title={item.name}
          widthing={width}
          backgroundColor={item.backgroundColor}
          paddingHorizontal={getSize.m(16)}
          onPress={() => navigation.navigate(item.navigation)}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Payment" topLine paddingHorizontal={getSize.m(16)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PAYMENT}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default PaymentMethod
