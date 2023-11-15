import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { View } from 'react-native'
import { Rating } from 'react-native-elements'
import styles from './styles'

const StarRating = ({
  startingValue,
  imageSize,
  readonly,
  onFinishRating,
  marginVertical,
}) => {
  return (
    <View style={styles.wrapperStar}>
      <Rating
        type="custom"
        startingValue={startingValue}
        imageSize={imageSize ? getSize.m(imageSize) : getSize.m(12)}
        ratingColor={COLORS.yellow}
        ratingBackgroundColor={COLORS.border}
        onFinishRating={onFinishRating}
        readonly={readonly ? false : true}
        style={{
          alignItems: 'flex-start',
          marginVertical: marginVertical ? getSize.m(marginVertical) : 0,
        }}
      />
    </View>
  )
}

export default StarRating
