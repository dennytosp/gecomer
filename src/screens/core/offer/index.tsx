import React from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { photos, PRODUCTS_DATA_VERTICOLUMNS } from '@/assets'
import { BannerPromotionItem, Header, RecommendProduct } from '@/components'
import Text from '@/components/text/text.component'
import { RoutesCommonStack, RoutesMainStack } from '@/navigators/routes'
import { width } from '@/utils'
import { styles } from './style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.OFFER_STACK>

const Offer = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderPromotionCode = () => {
    return (
      <View style={[styles.wrapperHeader]}>
        <Text
          title="Use “MEGSL” Cupon For Get 90% Off"
          textStyle={[styles.textPromotionCode]}
          style={[{ width: width / 2 }]}
        />
      </View>
    )
  }

  const renderPromotion = () => {
    return (
      <View style={[styles.wrapperCenter]}>
        <BannerPromotionItem
          onPress={() =>
            navigation.navigate(RoutesMainStack.COMMON_STACK, {
              screen: RoutesCommonStack.PRODUCT_SEE_MORE,
              params: {
                title: 'Super Flash Sale',
                data: PRODUCTS_DATA_VERTICOLUMNS.reverse(),
                isFlashSale: true,
              },
            })
          }
          title={'Super Flash Sale\n50% Off'}
          duration={23 * 60 * 60 * 1000}
          image={photos.promotion01}
        />
      </View>
    )
  }

  const renderRecommend = () => {
    return (
      <View style={[styles.wrapperContent]}>
        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
        />
      </View>
    )
  }

  return (
    <View style={[styles.container]}>
      <Header title="Offer" hideLeftIcon topLine />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        {renderPromotionCode()}
        {renderPromotion()}
        {renderRecommend()}
      </ScrollView>
    </View>
  )
}

export default Offer
