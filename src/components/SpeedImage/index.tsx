import React, { memo } from 'react'
import equals from 'react-fast-compare'
import { SpeedImageProps } from './type'
import FastImage from 'react-native-fast-image'
import { MetricsSizes } from '@/utils'

export const SpeedImage = memo((props: SpeedImageProps) => {
  const { imageType, customStyle } = props
  const imageSize = imageType ?? 'large'

  return (
    <FastImage
      style={[{ width: MetricsSizes[imageSize], aspectRatio: 1 }, customStyle]}
      resizeMode={'contain'}
      {...props}
    >
      {props.children}
    </FastImage>
  )
}, equals)
