import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
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
  CategoriesItem,
  ProductItem,
  BannerPromotionItem,
  RecommendProduct,
  SearchBar,
  Title,
} from '@/components'
import { routes } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './style'

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderCategories = (
    item: (typeof CATEGORIES_DATA)[0],
    index: number,
  ) => (
    <CategoriesItem
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
  }) => <ProductItem item={item} />

  const renderProductsVerticalColumns = ({
    item,
  }: {
    item: (typeof PRODUCTS_DATA_VERTICOLUMNS)[0]
  }) => (
    <ProductItem
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
      item={item}
      columns={numColumns}
      marginBottom={getSize.m(12)}
    />
  )

  return (
    <View style={[styles.container]}>
      <SearchBar
        rightIcon={Favorite}
        onPressRight={() =>
          navigation.navigate(routes.PRODUCT_SEE_MORE, {
            title: 'Favorite',
            data: PRODUCTS_DATA_VERTICOLUMNS,
          })
        }
        rightIconStart={Notifications}
        onPressRightStart={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        disableInput={true}
        onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
        style={[styles.marginBase]}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <BannerPromotionItem
          onPress={() =>
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              title: 'Super Flash Sale',
              data: PRODUCTS_DATA_VERTICOLUMNS.reverse(),
              isFlashSale: true,
            })
          }
          style={[
            styles.onScroll,
            { marginBottom: getSize.m(24), marginHorizontal: getSize.m(16) },
          ]}
          title={'Super Flash Sale\n50% Off'}
          duration={23 * 60 * 60 * 1000}
          image={photos.promotion01}
        />
        <Title
          title="Category"
          more="More Category"
          onPress={() => navigation.navigate(routes.EXPLORE)}
          style={[styles.marginBase]}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[{ marginHorizontal: getSize.m(16 - 12) }]}
        >
          {CATEGORIES_DATA.map(renderCategories)}
        </ScrollView>

        <Title
          title="Flash Sale"
          more="See More"
          style={[
            { marginTop: getSize.m(24 - 12), marginHorizontal: getSize.m(16) },
          ]}
          onPress={() => {
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              title: 'Flash Sale',
              data: PRODUCTS_DATA.reverse(),
            })
          }}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA.reverse()}
          renderItem={renderProducts}
          ItemSeparatorComponent={() => (
            <View style={[{ marginLeft: getSize.m(12) }]} />
          )}
          keyExtractor={(item, index) => `prod-home-${item.id}`}
          contentContainerStyle={[styles.marginBase]}
        />

        <Title
          title="Mega Sale"
          more="See More"
          style={[
            { marginTop: getSize.m(24), marginHorizontal: getSize.m(16) },
          ]}
          onPress={() => {
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              title: 'Mega Sale',
              data: DATA_MEGA_SALE,
            })
          }}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_MEGA_SALE}
          renderItem={renderProducts}
          ItemSeparatorComponent={() => (
            <View style={[{ marginLeft: getSize.m(12) }]} />
          )}
          keyExtractor={(item, index) => `prod-mega-home-${item.id}`}
          contentContainerStyle={[styles.marginBase]}
        />

        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
          style={[
            { marginTop: getSize.m(12), marginHorizontal: getSize.m(16) },
          ]}
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