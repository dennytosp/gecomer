import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/theme'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'

export const styles = StyleSheet.create({
  wrapperContent: {
    marginBottom: getSize.m(12),
  },
  wrapperTitleTexting: {
    paddingHorizontal: getSize.m(16),
    ...AppStyles.rowTopBetween,
  },
  wrapperSelectSizes: {
    marginBottom: getSize.m(24),
    borderWidth: getSize.m(1),
    borderColor: COLORS.border,
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(60 / 2),
    ...AppStyles.columnCenter,
  },
  wrapperSelectColors: {
    marginBottom: getSize.m(24),
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSpecification: {
    paddingHorizontal: getSize.m(16),
    marginBottom: getSize.m(24),
  },
  wrapperText01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperReviewProducts: {
    paddingHorizontal: getSize.m(16),
  },
  wrapperSubTitleStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getSize.m(16),
  },
  wrapperProducts: {
    marginTop: getSize.m(12),
  },
  textSizeNumber: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(14),
    color: COLORS.secondary,
  },
  textCountReview: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(10),
  },
  wrapTextCountStar: {
    marginLeft: getSize.m(8),
    marginRight: getSize.m(4),
  },
  textNameProduct: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(20),
    color: COLORS.secondary,
  },
  textPrice: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(20),
    color: COLORS.primary,
  },
  titleYouMight: {
    marginTop: getSize.m(24),
    marginBottom: getSize.m(0),
    paddingHorizontal: getSize.m(16),
  },
})
