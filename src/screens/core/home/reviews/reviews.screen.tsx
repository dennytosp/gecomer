import React from 'react'
import { FlatList, Pressable, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DATA_STAR_REVIEWS, REVIEWS, Star } from '@/assets'
import { ButtonPrimary, Header, ProductReviewItem, Text } from '@/components'
import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { RoutesMainStack, RoutesProductDetailStack } from '@/navigators/routes'
import { styles } from './review.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.COMMON_STACK>

const ReviewsScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderReviews = ({ item }: { item: (typeof REVIEWS)[0] }) => (
    <View style={[styles.wrapperReviews]}>
      <ProductReviewItem
        item={item}
        marginBottom={getSize.m(24)}
        imageReviews={true}
      />
    </View>
  )

  const renderFirstClose = () => (
    <Pressable style={[styles.wrapperAllReview]}>
      <Text
        title="All Reviews"
        textStyle={[{ fontFamily: FONTS.bold, color: COLORS.primary }]}
        style={[{ padding: getSize.m(16) }]}
      />
    </Pressable>
  )

  const TabReviews = () => {
    const renderTabReviews = (
      item: (typeof DATA_STAR_REVIEWS)[0],
      index: number,
    ) => (
      <View key={`tab-reviews--${index}`} style={[styles.wrapperTabReviews]}>
        <Star />
        <Text
          title={item.number}
          style={[{ paddingTop: getSize.m(4), marginLeft: getSize.m(10) }]}
        />
      </View>
    )

    return (
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
    )
  }

  return (
    <View style={[styles.container]}>
      <Header title={REVIEWS.length + ' Reviews'} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
      >
        <TabReviews />

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
        onPress={() =>
          navigation.navigate(RoutesMainStack.PRODUCT_DETAIL_STACK, {
            screen: RoutesProductDetailStack.WRITE_REVIEW,
          })
        }
      />
    </View>
  )
}

export default ReviewsScreen
