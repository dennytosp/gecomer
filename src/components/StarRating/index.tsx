import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { DimensionValue, View } from 'react-native'
import { Rating } from 'react-native-elements'
import { styles } from './styles'

type Props = {
  startingValue: number
  imageSize?: number
  readonly?: boolean
  marginVertical?: DimensionValue | undefined
  onFinishRating?: (star: number) => void
}

const StarRating = ({
  startingValue,
  imageSize,
  readonly,
  marginVertical,
  onFinishRating,
}: Props) => {
  return (
    <View style={[styles.wrapperStar]}>
      <Rating
        type="custom"
        startingValue={startingValue}
        imageSize={imageSize ? getSize.m(imageSize) : getSize.m(12)}
        ratingColor={COLORS.yellow}
        ratingBackgroundColor={COLORS.border}
        onFinishRating={onFinishRating}
        readonly={!readonly}
        style={{
          alignItems: 'flex-start',
          marginVertical: marginVertical ?? 0,
        }}
      />
    </View>
  )
}

export default StarRating
