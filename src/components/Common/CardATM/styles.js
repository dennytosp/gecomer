import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCard: {
    borderRadius: getSize.m(5),
    padding: getSize.m(24),
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  row01: {},
  row02: {
    marginHorizontal: getSize.m(32),
  },
})
export default styles
