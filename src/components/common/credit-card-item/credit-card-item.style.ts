import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCard: {
    borderRadius: getSize.m(5),
    padding: getSize.m(24),
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  row01: {},
  row02: {
    marginHorizontal: getSize.m(32),
  },
  wrapTextCode: {
    marginTop: getSize.m(32),
    marginBottom: getSize.m(16),
  },
  textCode: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: getSize.m(24),
  },
  textBase: {
    fontSize: getSize.m(10),
    color: COLORS.white,
  },
})
