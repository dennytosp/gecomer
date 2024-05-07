import {
  DATA_DU_AN_REVIEWS,
  DATA_IMAGES_REVIEWS,
  Like,
  PlusAnts,
} from '@/assets'
import { Header, StarRating, Text, Title } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native'
import { styles } from './ants-review.style'

const AntsReviewScreen = () => {
  const renderHeader = () => (
    <View style={[styles.wrapperTop]}>
      <Title title="2 đánh giá" textStyle={[{ fontSize: getSize.m(24) }]} />
      <Pressable style={[styles.wrapperEventAddReviews]}>
        <PlusAnts />
      </Pressable>
    </View>
  )

  const renderImage = (
    item: (typeof DATA_IMAGES_REVIEWS)[0],
    index: number,
  ) => (
    <View
      key={'rv-img' + index}
      style={[
        { marginLeft: index === 0 ? getSize.m(0) : getSize.m(12) },
        styles.wrapperImage,
      ]}
    >
      <Image
        source={item.image}
        style={{
          width: getSize.s(104),
          height: getSize.v(104),
          borderRadius: getSize.s(4),
        }}
      />
    </View>
  )

  const renderCardReviews = ({
    item,
  }: {
    item: (typeof DATA_DU_AN_REVIEWS)[0]
  }) => (
    <View style={[styles.wrapperCardReviews]}>
      <View style={[styles.wrapperInforInsideCard]}>
        <View style={[styles.wrapperRowLeftInfor]}>
          <Pressable style={[styles.wrapperAvatarInsideCard]}>
            <Image source={item.avatar} style={[styles.imageAvatar]} />
          </Pressable>
          <View style={{ marginHorizontal: getSize.m(24 / 2) }}>
            <Title title={item.name} style={[{ marginBottom: 0 }]} />
            <StarRating startingValue={Number(item.star)} imageSize={14} />
          </View>
        </View>
        <View style={[styles.wrapperRowRightInfo]}>
          <Text title={item.time} />
        </View>
      </View>

      <Text
        title={item.description}
        textStyle={[styles.textDescription]}
        style={[styles.wrapTextDescription]}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: 'row', flex: 1, marginBottom: getSize.m(6) }}
      >
        {DATA_IMAGES_REVIEWS.map(renderImage)}
      </ScrollView>

      <View style={[styles.wrapLike]}>
        <Text title={item.like} style={[{ marginTop: getSize.m(8) }]} />
        <Like />
      </View>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        title="Đánh giá sản phẩm"
        onPressRightEnd={() => console.log('Search')}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_DU_AN_REVIEWS}
        contentContainerStyle={{
          paddingHorizontal: getSize.m(8),
        }}
        renderItem={renderCardReviews}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => `da-product--${index}`}
      />
    </View>
  )
}

export default AntsReviewScreen
