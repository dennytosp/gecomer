import {
  CATEGORIES_DATA,
  DATA_MEGA_SALE,
  Favorite,
  Notifications,
  PRODUCTS_DATA,
  PRODUCTS_DATA_VERTICOLUMNS,
  photos,
} from '@/assets'
import {
  Categories,
  ProductsHorizontal,
  Promotion,
  RecommendProduct,
  Searching,
  Titling,
} from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import styles from './styles'

const Home = () => {
  const navigation = useNavigation()
  const _renderCategories = ({ item, index }) => {
    return (
      <Categories
        image={item.image}
        title={item.title}
        index={index === 0 ? getSize.m(0) : getSize.m(12)}
        // onPress={() => navigation.navigate(item.navigation)}
      />
    )
  }

  const _renderProducts = ({ item, index }) => {
    return (
      <View style={styles.wrapperProducts}>
        <ProductsHorizontal
          onPress={() => navigation.navigate(routes.DETAILS, { item })}
          index={index === 0 ? getSize.m(0) : getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
        />
      </View>
    )
  }

  const _renderProductsVerticalColumns = ({ item, index }) => {
    return (
      <View style={styles.wrapperProducts}>
        <ProductsHorizontal
          onPress={() => navigation.navigate(routes.DETAILS, { item })}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          columns
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Searching
        iconRight={Favorite}
        onPressRight={() => navigation.navigate(routes.FAVORITE)}
        iconRight01={Notifications}
        onPressRight01={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <Promotion
          onPress={() => navigation.navigate(routes.SUPER_FLASH_SALE)}
          style={styles.onScroll}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
          marginBottom={getSize.m(24)}
        />
        <Titling
          title="Category"
          more="More Category"
          onPress={() => navigation.navigate(routes.EXPLORE)}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES_DATA}
          renderItem={_renderCategories}
          keyExtractor={item => item.id.toString()}
        />

        <Titling
          title="Flash Sale"
          more="See More"
          marginTop={getSize.m(24)}
          onPress={() => navigation.navigate(routes.FLASH_SALE)}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA.splice(1, 3)}
          renderItem={_renderProducts}
          keyExtractor={index => index}
        />

        <Titling
          title="Mega Sale"
          more="See More"
          marginTop={12}
          onPress={() => navigation.navigate(routes.MEGA_SALE)}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_MEGA_SALE}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />

        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
        />

        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={_renderProductsVerticalColumns}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  )
}

export default Home
