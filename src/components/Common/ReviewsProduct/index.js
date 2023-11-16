import { photos } from '@/assets'
import StarRating from '@/components/StarRating'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const ReviewsProduct = ({
  name,
  star,
  description,
  time,
  avatar,
  imageReviews,
  marginBottom,
  style,
}) => {
  return (
    <View
      style={[
        { marginBottom: marginBottom ? marginBottom : getSize.m(0) },
        style,
      ]}
    >
      <Pressable style={styles.wrapperInfor}>
        <Pressable style={styles.wrapperImagePersonReviews}>
          <Image source={avatar} style={styles.imagePersonReviews} />
        </Pressable>

        <View style={styles.rating0}>
          <Texting title={name} textStyle={[styles.textName]} />
          <StarRating startingValue={star} imageSize={12} type="custom" />
        </View>
      </Pressable>

      <Texting
        title={description}
        textStyle={[styles.textDescription]}
        style={[{ marginBottom: getSize.m(8) }]}
      />

      {imageReviews && (
        <View style={styles.wrapperImageReviews}>
          <Image
            source={photos.product_reviews01}
            style={styles.imageProductReviews}
          />
          <Image
            source={photos.product_reviews02}
            style={{
              marginHorizontal: getSize.m(12),
              ...styles.imageProductReviews,
            }}
          />
          <Image
            source={photos.product_reviews03}
            style={styles.imageProductReviews}
          />
        </View>
      )}

      <Texting title={time} textStyle={[{ fontSize: getSize.m(10) }]} />
    </View>
  )
}

export default ReviewsProduct
