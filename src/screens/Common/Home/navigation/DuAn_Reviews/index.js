import {
  DATA_DU_AN_REVIEWS,
  DATA_IMAGES_REVIEWS,
  Like,
  Plus_Ants,
} from '@/assets'
import { Header, StarRating, Texting, Titling } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, Image, Pressable, ScrollView, View } from 'react-native'
import { styles } from './styles'

const DuAn_Reviews = () => {
  const renderHeader = () => (
    <View style={styles.wrapperTop}>
      <Titling title="2 đánh giá" style={[{ fontSize: getSize.m(24) }]} />
      <Pressable style={styles.wrapperEventAddReviews}>
        <Plus_Ants />
      </Pressable>
    </View>
  )

  const renderImage = (item, index) => (
    <View
      key={'rv-img' + index}
      style={{
        ...styles.wrapperImage,
        marginLeft: index === 0 ? getSize.m(0) : getSize.m(12),
      }}
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

  const renderCardReviews = ({ item }) => (
    <View style={styles.wrapperCardReviews}>
      {/* inforCard */}
      <View style={styles.wrapperInforInsideCard}>
        <View style={styles.wrapperRowLeftInfor}>
          <Pressable style={styles.wrapperAvatarInsideCard}>
            <Image source={item.avatar} style={styles.imageAvatar} />
          </Pressable>
          <View style={{ marginHorizontal: getSize.m(24 / 2) }}>
            <Titling title={item.name} marginBottom={getSize.m(1 / 100000)} />
            <StarRating startingValue={item.star} imageSize={14} />
          </View>
        </View>
        <View style={styles.wrapperRowRightInfo}>
          <Texting title={item.time} />
        </View>
      </View>

      <Texting
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
        <Texting title={item.like} style={[{ marginTop: getSize.m(8) }]} />
        <Like />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header
        topLine
        title="Đánh giá sản phẩm"
        onPressRight02={() => console.log('Search')}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_DU_AN_REVIEWS}
        contentContainerStyle={{
          paddingHorizontal: getSize.m(8),
        }}
        renderItem={renderCardReviews}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default DuAn_Reviews
