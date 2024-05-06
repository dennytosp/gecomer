import { StyleSheet } from 'react-native'
import { getSize } from '@/utils'
import { COLORS, FONTS } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(12),
  },
  wrapperHeader: {
    alignItems: 'center',
  },
  wrapperLogo: {
    marginBottom: 16,
  },

  wrapperCenter: {},
  wrapperFooter: {
    marginTop: 24,
  },
  wrapperTextFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: getSize.m(16),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  textBase: {
    fontSize: getSize.m(12),
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
})
