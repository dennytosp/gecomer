import { DATA_REVIEWS, DATA_STAR_REVIEWS, Star } from '@/assets'
import { ButtonPrimary, Header, ReviewsProduct, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, ScrollView, View } from 'react-native'
import styles from './styles'

const Reviews = () => {
  const navigation = useNavigation()

  const _renderReviews = ({ item }) => {
    return (
      <View style={styles.wrapperReviews}>
        <ReviewsProduct
          name={item.name}
          star={item.star}
          description={item.description}
          avatar={item.avatar}
          time={item.time}
          marginBottom={getSize.m(24)}
          imageReviews
        />
      </View>
    )
  }

  const _renderFirstClose = () => {
    return (
      <View style={styles.wrapperFirstClose}>
        <Pressable style={styles.wrapperAllReview}>
          <Texting
            title="All Reviews"
            paddingVertical={getSize.m(16)}
            fontFamily={FONTS.bold}
            color={COLORS.primary}
          />
        </Pressable>
      </View>
    )
  }

  const _renderTabReviews = ({ item, index }) => {
    return (
      <View
        style={{
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(12),
          ...styles.wrapperTabReviews,
        }}
      >
        <Star />
        <Texting
          title={item.number}
          paddingTop={getSize.m(4)}
          marginLeft={getSize.m(10)}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title={DATA_REVIEWS.length + ' Reviews'} topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapperCardTop}>
            <_renderFirstClose />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA_STAR_REVIEWS}
              renderItem={_renderTabReviews}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </ScrollView>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_REVIEWS}
          renderItem={_renderReviews}
          keyExtractor={item => item.id.toString()}
        />
        <ButtonPrimary
          title="Write Review"
          onPress={() => navigation.navigate(routes.WRITE_REVIEW)}
          style={[{ marginBottom: getSize.m(12) }]}
        />
      </ScrollView>
    </View>
  )
}

export default Reviews
