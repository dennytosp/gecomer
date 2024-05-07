import React from 'react'
import { ScrollView, View } from 'react-native'
import {
  Favorite,
  MAN_FASHION_DATA,
  Notifications,
  PRODUCTS_DATA_VERTICOLUMNS,
  WOMAN_FASHION_DATA,
} from '@/assets'
import { CategoriesItem, SearchBar, Title } from '@/components'
import {
  RoutesCommonStack,
  RoutesMainStack,
  RoutesNotificationStack,
  RoutesSearchStack,
} from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.EXPLORE_STACK>

const ExploreScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderHeader = () => (
    <View style={[styles.wrapperHeader]}>
      <SearchBar
        placeholder="Search Product"
        disableInput={true}
        rightIcon={Favorite}
        onPressRight={() => {
          navigation.navigate(RoutesMainStack.COMMON_STACK, {
            screen: RoutesCommonStack.PRODUCT_SEE_MORE,
            params: {
              title: 'Favorite',
              data: PRODUCTS_DATA_VERTICOLUMNS,
            },
          })
        }}
        rightIconStart={Notifications}
        onPressRightStart={() =>
          navigation.navigate(RoutesMainStack.NOTIFICATION_STACK, {
            screen: RoutesNotificationStack.NOTIFICATIONS,
          })
        }
        onPressInput={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.SEARCH_PAGE,
          })
        }
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

export default ExploreScreen
