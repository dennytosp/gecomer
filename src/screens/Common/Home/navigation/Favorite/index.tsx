import { PRODUCTS_DATA_VERTICOLUMNS } from '@/assets'
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

const Favorite = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderFavoriteProducts = ({
    item,
    index,
  }: {
    item: (typeof PRODUCTS_DATA_VERTICOLUMNS)[0]
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
      <Header topLine title="Favorite Product" />
      <FlatList
        columnWrapperStyle={[styles.columnWrapperStyle]}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA_VERTICOLUMNS}
        renderItem={renderFavoriteProducts}
        keyExtractor={(item, index) => `fav-prod${index}`}
      />
    </View>
  )
}

export default Favorite
