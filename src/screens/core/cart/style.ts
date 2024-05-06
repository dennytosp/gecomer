import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    marginTop: getSize.m(32),
    marginBottom: getSize.m(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.border,
    borderWidth: getSize.m(1),
    borderRadius: getSize.m(5),
  },
  input: {
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    flex: 1,
    padding: getSize.m(16),
    color: COLORS.secondary,
  },
  wrapperButtonApply: {
    backgroundColor: COLORS.primary,
    width: getSize.s(87),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: getSize.m(5),
    borderBottomRightRadius: getSize.m(5),
  },
  textApply: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
})
