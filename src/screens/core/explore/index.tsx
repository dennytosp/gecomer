import {
  Favorite,
  MAN_FASHION_DATA,
  Notifications,
  PRODUCTS_DATA_VERTICOLUMNS,
  WOMAN_FASHION_DATA,
} from '@/assets'
import { CategoriesItem, SearchBar, Title } from '@/components'
import { routes } from '@/navigators/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style'

const Explore = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderHeader = () => (
    <View style={[styles.wrapperHeader]}>
      <SearchBar
        rightIcon={Favorite}
        onPressRight={() => {
          navigation.navigate(routes.PRODUCT_SEE_MORE, {
            title: 'Favorite',
            data: PRODUCTS_DATA_VERTICOLUMNS,
          })
        }}
        rightIconStart={Notifications}
        onPressRightStart={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
    </View>
  )

  const renderCategoriesItem = (item: (typeof MAN_FASHION_DATA)[0]) => (
    <CategoriesItem
      key={`cat-woman-${item.title}`}
      image={item.image}
      title={item.title}
    />
  )

  return (
    <View style={[styles.container]}>
      {renderHeader()}

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <Title title="Man Fashion" style={[styles.onScroll]} />

        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
          {MAN_FASHION_DATA.map(renderCategoriesItem)}
        </View>

        <Title
          title="Woman Fashion"
          style={[{ paddingHorizontal: getSize.m(16) }]}
        />

        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
          {WOMAN_FASHION_DATA.map(renderCategoriesItem)}
        </View>
      </ScrollView>
    </View>
  )
}

export default Explore
