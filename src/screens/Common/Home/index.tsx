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
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { styles } from './styles'

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderCategories = (
    item: (typeof CATEGORIES_DATA)[0],
    index: number,
  ) => (
    <Categories
      key={`cat-home-${item.id}`}
      image={item.image}
      title={item.title}
      style={[{ margin: getSize.m(12) }]}
    />
  )

  const renderProducts = ({
    item,
    index,
  }: {
    item: (typeof PRODUCTS_DATA)[0]
    index: number
  }) => (
    <ProductsHorizontal
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
      index={index === 0 ? getSize.m(0) : getSize.m(12)}
      image={item.image}
      name={item.name}
      discounted={item.discounted}
      price={item.price}
      promotion={item.promotion}
    />
  )

  const renderProductsVerticalColumns = ({
    item,
  }: {
    item: (typeof PRODUCTS_DATA_VERTICOLUMNS)[0]
  }) => (
    <ProductsHorizontal
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
      image={item.image}
      name={item.name}
      discounted={item.discounted}
      price={item.price}
      promotion={item.promotion}
      columns={numColumns}
      marginBottom={getSize.m(12)}
    />
  )

  return (
    <View style={[styles.container]}>
      <Searching
        rightIcon={Favorite}
        onPressRight={() =>
          navigation.navigate(routes.PRODUCT_SEE_MORE, {
            data: PRODUCTS_DATA_VERTICOLUMNS,
          })
        }
        rightIconStart={Notifications}
        onPressRightStart={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
        style={[styles.marginBase]}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <Promotion
          onPress={() => navigation.navigate(routes.SUPER_FLASH_SALE)}
          style={[
            styles.onScroll,
            styles.marginBase,
            { marginBottom: getSize.m(24) },
          ]}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
        <Titling
          title="Category"
          more="More Category"
          onPress={() => navigation.navigate(routes.EXPLORE)}
          style={[styles.marginBase]}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[{ marginHorizontal: getSize.m(16 - 12) }]}>
          {CATEGORIES_DATA.map(renderCategories)}
        </ScrollView>

        <Titling
          title="Flash Sale"
          more="See More"
          style={[
            { marginTop: getSize.m(24 - 12), marginHorizontal: getSize.m(16) },
          ]}
          onPress={() => {
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              data: PRODUCTS_DATA.reverse(),
            })
          }}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA.reverse()}
          renderItem={renderProducts}
          keyExtractor={(item, index) => `prod-home-${item.id}`}
          style={[styles.marginBase]}
        />

        <Titling
          title="Mega Sale"
          more="See More"
          style={[
            { marginTop: getSize.m(24), marginHorizontal: getSize.m(16) },
          ]}
          onPress={() => {
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              data: DATA_MEGA_SALE,
            })
          }}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_MEGA_SALE}
          renderItem={renderProducts}
          keyExtractor={(item, index) => `prod-mega-home-${item.id}`}
          style={[styles.marginBase]}
        />

        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
          style={[styles.marginBase, { marginTop: getSize.m(12) }]}
        />

        <FlatList
          nestedScrollEnabled
          scrollEnabled={false}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          columnWrapperStyle={[styles.columnWrapperStyle]}
          contentContainerStyle={{ alignSelf: 'center' }}
          renderItem={renderProductsVerticalColumns}
          keyExtractor={(item, index) => `prod-ver-home-${index}`}
        />
      </ScrollView>
    </View>
  )
}

export default Home
