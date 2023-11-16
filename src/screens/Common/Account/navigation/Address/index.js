import { DATA_ADDRESS } from '@/assets'
import { Addressing, ButtonPrimary, Header } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const Address = ({ route }) => {
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
      <Header title="Address" topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={_renderAddress}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonPrimary
        title="Add Address"
        onPress={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            add_address: 'Add Address',
          })
        }
        style={[{ marginBottom: getSize.m(16) }]}
      />
    </View>
  )
}

export default Address
