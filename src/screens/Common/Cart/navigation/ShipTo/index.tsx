import { AddShip, DATA_ADDRESS } from '@/assets'
import { AddressItem, ButtonPrimary, Header } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const ShipTo = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderAddress = ({
    item,
    index,
  }: {
    item: (typeof DATA_ADDRESS)[0]
    index: number
  }) => (
    <AddressItem
      style={{
        marginTop: index === 0 ? getSize.m(16) : getSize.m(0),
      }}
      name={item.name}
      address={item.address}
      phoneNumber={item.phoneNumber}
      buttonTitle="Edit"
      handleDelete={() => navigation.navigate(routes.CONFIRMATION)}
      handleButton={() =>
        navigation.navigate(routes.ADD_ADDRESS, {
          addressTitle: 'Edit Address',
        })
      }
    />
  )

  return (
    <View style={[styles.container]}>
      <Header
        title="Ship To"
        rightIconEnd={AddShip}
        topLine
        onPressRightEnd={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            addressTitle: 'Add Address',
          })
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={renderAddress}
        keyExtractor={(item, index) => `ship-to-${index}`}
      />
      <ButtonPrimary
        title="Next"
        atBottom={true}
        onPress={() => navigation.navigate(routes.PAYMENT_METHOD)}
      />
    </View>
  )
}

export default ShipTo
