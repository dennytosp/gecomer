import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
    alignItems: 'center',
    marginTop: getSize.m(16),
  },
  wrapperRightRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnWrapperStyle: {
    gap: getSize.m(12),
  },
})
