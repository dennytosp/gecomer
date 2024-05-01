import { PRODUCTS_DATA, Search } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
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
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

type Props = {}

const ProductSeeMore = ({}: Props) => {
  const route = useRoute<RouteProp<ParamListBase>>()
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const insets = useSafeAreaInsets()

  const params = route.params as {
    data: any
  }

  const numColumns = 2

  const renderProductSeeMore = ({
    item,
    index,
  }: {
    item: any
    index: number
  }) => (
    <ProductsHorizontal
      image={item.image}
      name={item.name}
      discounted={item.discounted}
      price={item.price}
      promotion={item.promotion}
      columns={numColumns}
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
      style={[{ marginTop: getSize.m(16) }]}
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
        data={params?.data}
        renderItem={renderProductSeeMore}
        contentContainerStyle={[{ paddingBottom: insets.bottom }]}
        keyExtractor={(item, index) => `flash-sale-${item.name}${index}`}
      />
    </View>
  )
}

export default ProductSeeMore
