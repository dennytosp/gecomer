import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperButton: {
    marginTop: getSize.m(16),
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(4),
    alignItems: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: getSize.m(4),
      height: getSize.m(8),
    },
    shadowOpacity: getSize.m(0.15),
    shadowRadius: getSize.m(8),
    elevation: getSize.m(4),
  },
  textButton: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(14),
    color: COLORS.white,
    paddingVertical: getSize.m(16),
  },
})
