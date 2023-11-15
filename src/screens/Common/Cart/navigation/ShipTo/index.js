import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import { Addressing, ButtonPrimary } from '@/components'
import { DATA_ADDRESS } from '@/assets'
import { getSize } from '@/utils'
import { Header } from '@/components'
import { Add_Ship } from '@/assets'
import { routes } from '@/navigation/routes'
import { useNavigation } from '@react-navigation/native'

const ShipTo = () => {
  const navigation = useNavigation()

  const _renderAddress = ({ item, index }) => {
    return (
      <Addressing
        style={{
          marginTop: index === 0 ? getSize.m(16) : getSize.m(0),
        }}
        name={item.name}
        address={item.address}
        phoneNumber={item.phoneNumber}
        titleEvent="Edit"
        handleDelete={() => navigation.navigate(routes.CONFIRMATION)}
        handleEventEdit={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            edit_address: 'Edit Address',
          })
        }
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header
        title="Ship To"
        iconRight02={Add_Ship}
        topLine
        onPressRight02={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            add_address: 'Add Address',
          })
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={_renderAddress}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonPrimary
        title="Next"
        marginBottom={getSize.m(16)}
        onPress={() => navigation.navigate(routes.PAYMENT_METHOD)}
      />
    </View>
  )
}

export default ShipTo
