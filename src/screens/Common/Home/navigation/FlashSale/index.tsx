import { PRODUCTS_DATA, Search } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
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

const FlashSale = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderFlashSaleProducts = ({
    item,
    index,
  }: {
    item: (typeof PRODUCTS_DATA)[0]
    index: number
  }) => (
    <ProductsHorizontal
      marginBottom={getSize.m(12)}
      image={item.image}
      name={item.name}
      discounted={item.discounted}
      price={item.price}
      promotion={item.promotion}
      columns={numColumns}
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
      style={[{ marginTop: index <= 1 ? getSize.m(16) : getSize.m(0) }]}
    />
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        title="Flash Sale"
        rightIconEnd={Search}
        onPressRightEnd={() => navigation.navigate(routes.SEARCH_PAGE)}
      />

      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={[styles.columnWrapperStyle]}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA}
        renderItem={renderFlashSaleProducts}
        keyExtractor={(item, index) => `flash-sale-${index}`}
      />
    </View>
  )
}

export default FlashSale
