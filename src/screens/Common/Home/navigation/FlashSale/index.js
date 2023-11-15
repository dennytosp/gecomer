import { PRODUCTS_DATA, Search } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const FlashSale = () => {
  const navigation = useNavigation()
  const _renderFlashSaleProducts = ({ item, index }) => {
    return (
      <View style={styles.wrapperFlashSale(index)}>
        <ProductsHorizontal
          marginBottom={getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          columns
          onPress={() => navigation.navigate(routes.DETAILS, { item })}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        topLine
        title="Flash Sale"
        iconRight02={Search}
        onPressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA}
        renderItem={_renderFlashSaleProducts}
        keyExtractor={index => index}
      />
    </View>
  )
}

export default FlashSale
