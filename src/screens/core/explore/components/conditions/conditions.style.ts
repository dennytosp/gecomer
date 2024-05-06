import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCondition: {},
  wrapperRow: {
    flexDirection: 'row',
  },
  notClick: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(1),
    borderRadius: getSize.s(5),
    padding: getSize.m(16),
  },
  clicked: {
    padding: getSize.m(16),
    backgroundColor: COLORS.border,
    borderRadius: getSize.s(5),
  },
  textBase: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
})
