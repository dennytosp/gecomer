import { DATA_REVIEWS, DATA_STAR_REVIEWS, Star } from '@/assets'
import { ButtonPrimary, Header, ReviewsProduct, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

const Reviews = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const insets = useSafeAreaInsets()

  const renderReviews = ({ item }: { item: (typeof DATA_REVIEWS)[0] }) => (
    <View style={[styles.wrapperReviews]}>
      <ReviewsProduct
        name={item.name}
        star={Number(item.star)}
        description={item.description}
        avatar={item.avatar}
        time={item.time}
        marginBottom={getSize.m(24)}
        imageReviews
      />
    </View>
  )

  const renderFirstClose = () => (
    <Pressable style={[styles.wrapperAllReview]}>
      <Texting
        title="All Reviews"
        textStyle={[{ fontFamily: FONTS.bold, color: COLORS.primary }]}
        style={[{ padding: getSize.m(16) }]}
      />
    </Pressable>
  )

  const renderTabReviews = (
    item: (typeof DATA_STAR_REVIEWS)[0],
    index: number,
  ) => (
    <View key={`tab-reviews--${index}`} style={[styles.wrapperTabReviews]}>
      <Star />
      <Texting
        title={item.number}
        style={[{ paddingTop: getSize.m(4), marginLeft: getSize.m(10) }]}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header title={DATA_REVIEWS.length + ' Reviews'} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never">
        <ScrollView
          horizontal
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View style={[styles.wrapperCardTop]}>
            {renderFirstClose()}
            {/* <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA_STAR_REVIEWS}
              renderItem={renderTabReviews}
              keyExtractor={(item, index) => `tab-reviews--${index}`}
            /> */}

            {DATA_STAR_REVIEWS.map(renderTabReviews)}
          </View>
        </ScrollView>

        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA_REVIEWS}
          renderItem={renderReviews}
          keyExtractor={(item, index) => `reviews--${index}`}
        />

        <ButtonPrimary
          title="Write Review"
          onPress={() => navigation.navigate(routes.WRITE_REVIEW)}
          style={[{ marginBottom: insets.bottom }]}
        />
      </ScrollView>
    </View>
  )
}

export default Reviews
