import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {},
  text: {
    color: COLORS.grey,
    fontSize: getSize.m(12),
    fontFamily: FONTS.regular,
  },
})
