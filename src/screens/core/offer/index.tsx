import { photos, PRODUCTS_DATA_VERTICOLUMNS } from '@/assets'
import { Header, BannerPromotionItem, RecommendProduct } from '@/components'
import Text from '@/components/text/text.component'
import { routes } from '@/navigators/routes'
import { width } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style'

const Offer = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

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
            navigation.navigate(routes.PRODUCT_SEE_MORE, {
              title: 'Super Flash Sale',
              data: PRODUCTS_DATA_VERTICOLUMNS.reverse(),
              isFlashSale: true,
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
