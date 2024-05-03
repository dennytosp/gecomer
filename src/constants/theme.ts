import { Dimensions } from 'react-native'
import { getSize } from '@/utils/responsive'

const { width, height } = Dimensions.get('window')

export const COLORS = {
  black: '#303030',
  black01: '#222222',
  white: '#FFFFFF',
  dark: '#000',

  purple: '#5C61F4',
  green: '#53D1B6',
  red: '#EB001B',
  yellow: '#FFC833',
  primary: '#33A0FF',
  pale_red: '#FB7181',
  secondary: '#223263',
  border: '#EBF0FF',
  grey: '#9098B1',
  gray: '#E0E0E0',
}

export const SIZES = {
  base: getSize.m(16),
  radius: getSize.m(8),
  width,
  height,
}

export const FONTS = {
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBold',
  extraLight: 'Poppins-ExtraLight',
  extraLightItalic: 'Poppins-ExtraLightItalic',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  lightItalic: 'Poppins-LightItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  regular: 'Poppins-Regular',
  semibold: 'Poppins-SemiBold',
  semiboldItalic: 'Poppins-SemiBoldItalic',
  thin: 'Poppins-Thin',
  thinItalic: 'Poppins-ThinItalic',
}

const theme = { COLORS, SIZES, FONTS }

export default theme
