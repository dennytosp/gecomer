import { AddShip, DATA_ADDRESS } from '@/assets'
import { AddressItem, ButtonPrimary, Header } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

type Props = {}
type Params = {
  type: 'address-on-cart' | 'personal-address'
  headerTitle: string
}

const Address = ({}: Props) => {
  const route = useRoute<RouteProp<ParamListBase>>()
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const params = route?.params as Params
  const addressOnCart = params?.type === 'address-on-cart'
  const personalAddress = params?.type === 'personal-address'

  const renderAddress = ({ item }: { item: (typeof DATA_ADDRESS)[0] }) => (
    <AddressItem
      item={item}
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
        title={params?.headerTitle ?? 'Address'}
        topLine
        style={[{ marginBottom: getSize.m(16) }]}
        rightIconEnd={addressOnCart ? AddShip : undefined}
        onPressRightEnd={() => {
          if (addressOnCart) {
            navigation.navigate(routes.ADD_ADDRESS, {
              addressTitle: 'Add Address',
            })
          }
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={renderAddress}
        keyExtractor={(item, index) => `address-item-${index}`}
      />

      <ButtonPrimary
        title={personalAddress ? 'Add Address' : 'Next'}
        atBottom={true}
        onPress={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            addressTitle: 'Add Address',
          })
        }
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default Address
