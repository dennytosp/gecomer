import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  icon: {
    paddingVertical: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    paddingHorizontal: getSize.m(16),
  },
  textTitle: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  wrapTextTitle: {
    padding: getSize.m(16),
  },
})
