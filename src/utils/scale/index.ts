import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 393
const guidelineBaseHeight = 852

const scale = (size: number) => {
  return (shortDimension / guidelineBaseWidth) * size
}

const verticalScale = (size: number) => {
  return (longDimension / guidelineBaseHeight) * size
}

const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor
}

/**
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/

const tiny = moderateScale(4) // 4
const small = tiny * 2 // 8
const mediumSmall = tiny * 3 // 12
const regular = small * 2 // 16
const large = small * 3 // 24
const big = regular * 2 // 32
const huge = large * 2 // 48

export const MetricsSizes = {
  tiny,
  small,
  mediumSmall,
  regular,
  large,
  big,
  huge,
}

export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
}
