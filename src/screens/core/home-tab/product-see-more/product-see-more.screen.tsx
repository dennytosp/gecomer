import { photos, PRODUCTS_DATA, Search } from '@/assets'
import { Header, ProductItem, Promotion } from '@/components'
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
import { styles } from './product-see-more.style'

type Props = {}

const ProductSeeMore = ({}: Props) => {
  const route = useRoute<RouteProp<ParamListBase>>()
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const insets = useSafeAreaInsets()

  const params = route.params as {
    title: string
    data: any
    isFlashSale?: boolean
  }

  const numColumns = 2

  const renderProductSeeMore = ({
    item,
    index,
  }: {
    item: any
    index: number
  }) => (
    <ProductItem
      item={item}
      columns={numColumns}
      style={[{ marginTop: getSize.m(16) }]}
    />
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        title={params?.title ?? 'Flash Sale'}
        rightIconEnd={Search}
        onPressRightEnd={() => navigation.navigate(routes.SEARCH_PAGE)}
      />

      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={[styles.columnWrapperStyle]}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        data={params?.data}
        ListHeaderComponent={() => (
          <>
            {params?.isFlashSale && (
              <Promotion
                style={[{ marginTop: getSize.m(16) }]}
                title={'Super Flash Sale\n50% Off'}
                duration={23 * 60 * 60 * 1000}
                image={photos.promotion01}
              />
            )}
          </>
        )}
        renderItem={renderProductSeeMore}
        contentContainerStyle={[{ paddingBottom: insets.bottom }]}
        keyExtractor={(item, index) => `flash-sale-${item.name}${index}`}
      />
    </View>
  )
}

export default ProductSeeMore
