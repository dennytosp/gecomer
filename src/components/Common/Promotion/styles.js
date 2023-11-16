import { COLORS, FONTS } from '@/constants'
import { getSize, height, width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperPromotion: marginBottom => ({
    marginBottom: marginBottom,
  }),
  wrapperContentPromotion: {
    position: 'absolute',
    left: getSize.m(24),
    top: getSize.m(32),
  },
  imagePromotion: {
    width: width - getSize.m(32),
    height: height / getSize.m(4),
    borderRadius: 5,
  },
  wrapperTime: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: getSize.m(24),
    bottom: getSize.m(32),
  },
  wrapperCardTime: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getSize.m(12),
    paddingVertical: getSize.m(8),
    borderRadius: 5,
  },
  wrapperContent: {},
  textBase: {
    fontSize: getSize.m(16),
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
  },
  textTitle: {
    fontSize: getSize.m(24),
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  text2Dots: {
    fontSize: getSize.m(16),
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  textSeconds: {
    fontSize: getSize.m(16),
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
  },
})
