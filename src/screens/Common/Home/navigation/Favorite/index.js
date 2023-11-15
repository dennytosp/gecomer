import { PRODUCTS_DATA_VERTICOLUMNS } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const Favorite = ({ navigation }) => {
  const _renderFavoriteProducts = ({ item, index }) => {
    return (
      <View style={styles.wrapperFavoriteProducts(index)}>
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
      <Header topLine title="Favorite Product" />
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA_VERTICOLUMNS}
        renderItem={_renderFavoriteProducts}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Favorite
