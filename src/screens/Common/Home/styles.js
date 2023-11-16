import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    flex: 1,
    // width: (width - getSize.m(32))
  },
  wrapperProducts: {
    marginBottom: getSize.m(12),
  },
  onScroll: {
    marginTop: getSize.m(16),
  },
})
