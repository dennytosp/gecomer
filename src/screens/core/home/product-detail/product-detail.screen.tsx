import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  View,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { More, Search } from '@/assets'
import { ButtonPrimary, Header } from '@/components'
import {
  RoutesAccountStack,
  RoutesCartStack,
  RoutesMainStack,
  RoutesSearchStack,
} from '@/navigators/routes'
import { getSize } from '@/utils'
import DetailsContent from '../components/details-content/details-content.component'
import { styles } from './product-detail.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.PRODUCT_DETAIL_STACK>

const ProductDetailScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const route = useRoute<NavigationProps['route']>()
  const { item: receive } = route?.params as unknown as {
    item: {
      image: ImageSourcePropType
      name: string
      discounted: string
    }
  }

  const renderImageContent = () => (
    <View style={[styles.wrapperImageContent]}>
      <Pressable style={{ marginBottom: getSize.m(16) }}>
        <Image source={receive?.image} style={[styles.imageProduct]} />
      </Pressable>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        numberOfLines={1}
        paddingHorizontal={getSize.m(16)}
        title={receive?.name.slice(0, 20) + '...'}
        rightIconStart={Search}
        rightIconEnd={More}
        onPressRightStart={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.SEARCH_PAGE,
          })
        }
        onPressRightEnd={() =>
          navigation.navigate(RoutesMainStack.ACCOUNT_STACK, {
            screen: RoutesAccountStack.ACCOUNT,
          })
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        {renderImageContent()}
        <DetailsContent name={receive?.name} price={receive?.discounted} />
      </ScrollView>

      <ButtonPrimary
        title="Add To Cart"
        onPress={() =>
          navigation.navigate(RoutesMainStack.CART_STACK, {
            screen: RoutesCartStack.CART,
          })
        }
        style={[{ marginTop: getSize.m(16), marginHorizontal: getSize.m(16) }]}
      />
    </View>
  )
}

export default ProductDetailScreen
