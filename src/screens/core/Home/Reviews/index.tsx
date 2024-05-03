import React from 'react'
import { FlatList, Pressable, ScrollView, View } from 'react-native'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { DATA_REVIEWS, DATA_STAR_REVIEWS, REVIEWS, Star } from '@/assets'
import { ButtonPrimary, Header, ReviewsProduct, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'

import { styles } from './styles'
import { faker } from '@faker-js/faker'

const Reviews = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderReviews = ({ item }: { item: (typeof REVIEWS)[0] }) => (
    <View style={[styles.wrapperReviews]}>
      <ReviewsProduct
        name={item.name}
        star={Number(item.star)}
        description={item.description}
        avatar={item.avatar}
        time={String(item.time)}
        marginBottom={getSize.m(24)}
        imageReviews={true}
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
      <Header title={REVIEWS.length + ' Reviews'} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
      >
        <ScrollView
          horizontal
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.wrapperCardTop]}>
            {renderFirstClose()}
            {DATA_STAR_REVIEWS.map(renderTabReviews)}
          </View>
        </ScrollView>

        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={REVIEWS}
          renderItem={renderReviews}
          keyExtractor={(item, index) => `reviews--${index}`}
        />
      </ScrollView>

      <ButtonPrimary
        title="Write Review"
        onPress={() => navigation.navigate(routes.WRITE_REVIEW)}
      />
    </View>
  )
}

export default Reviews
