import { PRODUCTS_DATA_VERTICOLUMNS, Search, photos } from '@/assets'
import { Header, ProductsHorizontal, Promotion } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import styles from './styles'

const SuperFlashSale = () => {
  const navigation = useNavigation()
  const _renderProductsVerticalColumns = ({ item }) => {
    return (
      <View style={styles.wrapperProducts}>
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
        title="Super Flash Sale"
        iconRight02={Search}
        onPressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <Promotion
          style={{ marginTop: getSize.m(16) }}
          marginBottom={16}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
        <FlatList
          keyboardDismissMode="on-drag"
          columnWrapperStyle={styles.columnWrapperStyle}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={_renderProductsVerticalColumns}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  )
}

export default SuperFlashSale
