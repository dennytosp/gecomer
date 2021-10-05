import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#303030',
  black01: '#222222',
  white: '#FFFFFF',
  dark: '#000',

  green: '#2AA952',
  red: '#EB001B',
  yellow: '#FFCC00',

  primary: '#40BFFF',
  pale_red: '#FB7181',
  secondary: '#223263',
  grey: '#9098B1',
};

export const SIZES = {
  base: 10,
  radius: 20,
  width,
  height,
};

export const FONTS = {
  //Primary Fonts
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
};

const theme = {COLORS, SIZES, FONTS};
export default theme;
