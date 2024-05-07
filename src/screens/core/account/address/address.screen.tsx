import React from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AddShip, DATA_ADDRESS } from '@/assets'
import { AddressItem, ButtonPrimary, Header } from '@/components'
import { RoutesCommonStack, RoutesMainStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './address.style'

type Params = {
  type: 'address-on-cart' | 'personal-address'
  headerTitle: string
}

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.COMMON_STACK>

const AddressScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const route = useRoute<NavigationProps['route']>()

  const params = route?.params as unknown as Params
  const addressOnCart = params?.type === 'address-on-cart'
  const personalAddress = params?.type === 'personal-address'

  const renderAddress = ({ item }: { item: (typeof DATA_ADDRESS)[0] }) => (
    <AddressItem
      item={item}
      buttonTitle="Edit"
      handleDelete={() => {
        navigation.navigate(RoutesMainStack.COMMON_STACK, {
          screen: RoutesCommonStack.CONFIRMATION,
        })
      }}
      handleButton={() => {
        navigation.navigate(RoutesMainStack.COMMON_STACK, {
          screen: RoutesCommonStack.ADDRESS_INPUT,
          params: {
            addressTitle: 'Edit Address',
          },
        })
      }}
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
            navigation.navigate(RoutesMainStack.COMMON_STACK, {
              screen: RoutesCommonStack.ADDRESS_INPUT,
              params: {
                addressTitle: 'Add Address',
              },
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
        onPress={() =>
          navigation.navigate(RoutesMainStack.COMMON_STACK, {
            screen: RoutesCommonStack.ADDRESS_INPUT,
            params: {
              addressTitle: 'Add Address',
            },
          })
        }
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default AddressScreen
