import React from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { photos, Search } from '@/assets'
import { BannerPromotionItem, Header, ProductItem } from '@/components'
import { RoutesMainStack, RoutesSearchStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './product-see-more.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.COMMON_STACK>

const ProductSeeMore = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const route = useRoute<NavigationProps['route']>()

  const insets = useSafeAreaInsets()

  const params = route.params as unknown as {
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
        onPressRightEnd={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.SEARCH_PAGE,
          })
        }
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
              <BannerPromotionItem
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
