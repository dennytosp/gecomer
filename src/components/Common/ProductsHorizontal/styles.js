import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperProducsing: (marginBottom, columns) => ({
    marginBottom: marginBottom,
    borderRadius: getSize.s(5),
    borderColor: COLORS.border,
    borderWidth: getSize.m(3 / 2),
    padding: columns ? getSize.m(16) : getSize.m(16),
  }),
  imageProducts: columns => ({
    width: columns ? getSize.s(274 / 2) : getSize.s(110),
    height: columns ? getSize.v(274 / 2) : getSize.v(110),
    marginBottom: getSize.m(8),
  }),
  wrapperRowPrice: {
    flexDirection: 'row',
  },
  textName: {
    color: COLORS.secondary,
    width: getSize.m(100),
    lineHeight: getSize.m(18),
    fontFamily: FONTS.bold,
    marginBottom: getSize.m(4),
  },
  textBase: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  textPrice: {
    fontSize: getSize.m(10),
    textDecorationLine: 'line-through',
  },
  textPromotion: {
    color: COLORS.pale_red,
    fontFamily: FONTS.bold,
    fontSize: getSize.m(10),
  },
})
