import { PRODUCTS_DATA_VERTICOLUMNS, Search, photos } from '@/assets'
import { Header, ProductsHorizontal, Promotion } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { styles } from './styles'

const SuperFlashSale = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderProductsVerticalColumns = ({
    item,
  }: {
    item: (typeof PRODUCTS_DATA_VERTICOLUMNS)[0]
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
    />
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        title="Super Flash Sale"
        rightIconEnd={Search}
        onPressRightEnd={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <Promotion
          style={[{ marginTop: getSize.m(16) }]}
          marginBottom={16}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          keyboardDismissMode="on-drag"
          columnWrapperStyle={[styles.columnWrapperStyle]}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={renderProductsVerticalColumns}
          keyExtractor={(item, index) => `super-fs-${index}`}
        />
      </ScrollView>
    </View>
  )
}

export default SuperFlashSale
