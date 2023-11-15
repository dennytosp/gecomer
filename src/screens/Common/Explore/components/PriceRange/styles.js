import { getSize, width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperPriceRange: {
    marginTop: getSize.m(16),
  },
  rowInput: {
    flexDirection: 'row',
    marginBottom: getSize.m(24),
  },
  inputRowLeft: {
    width: width / 2 - getSize.m(22),
    marginRight: getSize.m(12),
  },
  inputRowRight: {
    width: width / 2 - getSize.m(22),
  },
})
export default styles
