import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperProduct: {
    borderRadius: getSize.s(5),
    borderColor: COLORS.border,
    borderWidth: getSize.m(3 / 2),
    padding: getSize.m(16),
  },
  imageProducts: {
    marginBottom: getSize.m(8),
  },
  wrapperRowPrice: {
    flexDirection: 'row',
  },
  textName: {
    color: COLORS.secondary,
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
