import { StyleSheet } from 'react-native'
import { getSize, height, width } from '@/utils'
import { COLORS, FONTS } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
})
