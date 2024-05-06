import { COLORS, FONTS } from '@/theme'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperButton: {
    ...AppStyles.columnCenter,
    marginTop: getSize.m(16),
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(5),
    padding: getSize.m(16),
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: getSize.m(0),
      height: getSize.m(8),
    },
    shadowOpacity: 0.25,
    shadowRadius: getSize.m(6),
    elevation: getSize.m(4),
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: getSize.m(1.5),
    borderColor: COLORS.border,
  },
  textButton: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(14),
    color: COLORS.white,
  },
})
