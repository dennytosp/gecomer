import { StyleSheet } from 'react-native'
import { getSize } from '@/utils'
import { COLORS, FONTS } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperOrder: {
    marginBottom: getSize.m(16),
    borderRadius: getSize.m(5),
    borderWidth: getSize.m(1),
    borderColor: COLORS.border,
    padding: getSize.m(16),
  },
  line: {
    borderWidth: getSize.m(1),
    borderRadius: getSize.m(5),
    borderColor: COLORS.border,
    marginBottom: getSize.m(12),
    borderStyle: 'dotted',
  },
  rowOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCode: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  textPrice: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
})
