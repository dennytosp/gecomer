import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperHeaderTitling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
  },
  textStyle: {
    color: COLORS.secondary,
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
  },
})
