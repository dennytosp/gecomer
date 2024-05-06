import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperCenter: {},
  textTitle: {
    fontFamily: FONTS.bold,
  },
  wrapTitle: {
    paddingVertical: getSize.m(16),
    marginHorizontal: getSize.m(16),
  },
})
