import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/constants'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'

export const styles = StyleSheet.create({
  wrapperEmpty: {},
  wrapperContentEmpty: {
    alignItems: 'center',
  },
  wrapperImageTitle: {
    ...AppStyles.columnCenter,
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.m(72),
    shadowColor: COLORS.primary,
    elevation: 6,
  },
  wrapperCancel: {
    ...AppStyles.columnCenter,
    padding: getSize.m(16),
    borderRadius: getSize.s(5),
    borderWidth: getSize.s(3 / 2),
    borderColor: COLORS.border,
  },
  textTitle: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(24),
    color: COLORS.secondary,
  },
  textCancel: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
  },
})
