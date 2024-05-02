import {
  Favorite,
  MAN_FASHION_DATA,
  Notifications,
  WOMAN_FASHION_DATA,
} from '@/assets'
import { Categories, Searching, Titling } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'

const Explore = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderHeader = () => (
    <View style={[styles.wrapperHeader]}>
      <Searching
        rightIcon={Favorite}
        onPressRight={() => navigation.navigate(routes.FAVORITE)}
        rightIconStart={Notifications}
        onPressRightStart={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
    </View>
  )

  const renderCategoriesItem = (item: (typeof MAN_FASHION_DATA)[0]) => (
    <Categories
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
        keyboardDismissMode="on-drag">
        <Titling title="Man Fashion" style={[styles.onScroll]} />

        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
          {MAN_FASHION_DATA.map(renderCategoriesItem)}
        </View>

        <Titling
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
