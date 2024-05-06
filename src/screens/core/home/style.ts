import { COLORS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginBase: {
    paddingHorizontal: getSize.m(16),
  },
  columnWrapperStyle: {
    gap: getSize.m(12),
  },
  onScroll: {
    marginTop: getSize.m(16),
  },
})
