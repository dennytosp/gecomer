import { COLORS, FONTS } from '@/theme'
import { getSize, width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperHeader: {
    padding: getSize.m(16),
    borderRadius: getSize.s(5),
    borderColor: COLORS.border,
    borderWidth: getSize.m(3 / 2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    width: getSize.s(80),
    height: getSize.v(80),
    borderRadius: getSize.s(5),
  },
  wrapperContentCard: {
    marginHorizontal: getSize.m(12),
  },
  rowColumn01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    width: (width - 56) / 2,
  },
  rowRight01: {
    flexDirection: 'row',
    marginTop: getSize.m(-2),
  },
  iconFavorited: {
    marginRight: getSize.m(4),
  },
  iconDelete: {
    // marginLeft: getSize.m(4),
  },
  rowColumn02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  textPrice: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  rowRight02: {
    flexDirection: 'row',
    borderColor: COLORS.border,
    borderWidth: getSize.m(2 / 2),
    borderRadius: getSize.m(5),
    alignItems: 'center',
  },
  iconLess: {
    marginHorizontal: getSize.m(8),
    alignItems: 'center',
  },
  iconPlus: {
    marginHorizontal: getSize.m(8),
  },
  textQuantity: {
    color: COLORS.secondary,
    textAlign: 'center',
    marginHorizontal: getSize.m(2),
    // backgroundColor: COLORS.border,
  },
})
