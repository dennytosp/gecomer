import { StyleSheet } from 'react-native'
import { getSize, height, width } from '@/utils'
import { COLORS, FONTS } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    backgroundColor: COLORS.white,
  },
  onScroll: {
    // marginTop: getSize.m(16),
  },
})
