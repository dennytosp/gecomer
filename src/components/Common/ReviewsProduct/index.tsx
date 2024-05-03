import { photos } from '@/assets'
import StarRating from '@/components/StarRating'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './styles'

type Props = {
  name: string
  star: number
  description: string
  time: string
  avatar: string
  marginBottom?: DimensionValue | undefined
  imageReviews?: boolean
  style?: StyleProp<ViewStyle>
}

const ReviewsProduct = ({
  name,
  star,
  description,
  time,
  avatar,
  imageReviews,
  marginBottom,
  style,
}: Props) => {
  return (
    <View style={[{ marginBottom }, style]}>
      <Pressable style={[styles.wrapperInfor]}>
        <Pressable style={[styles.wrapperImagePersonReviews]}>
          <Image
            source={{ uri: avatar }}
            fadeDuration={0}
            style={[styles.imagePersonReviews]}
          />
        </Pressable>

        <View style={[styles.rating0]}>
          <Texting title={name} textStyle={[styles.textName]} />
          <StarRating startingValue={star} imageSize={12} />
        </View>
      </Pressable>

      <Texting
        title={description}
        textStyle={[styles.textDescription]}
        style={[{ marginBottom: getSize.m(8) }]}
      />

      {imageReviews && (
        <View style={[styles.wrapperImageReviews]}>
          <Image
            source={photos.product_reviews01}
            style={[styles.imageProductReviews]}
          />
          <Image
            source={photos.product_reviews02}
            style={[
              styles.imageProductReviews,
              { marginHorizontal: getSize.m(12) },
            ]}
          />
          <Image
            source={photos.product_reviews03}
            style={[styles.imageProductReviews]}
          />
        </View>
      )}

      <Texting title={String(time)} textStyle={[{ fontSize: getSize.m(10) }]} />
    </View>
  )
}

export default ReviewsProduct
