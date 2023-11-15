import { StyleSheet } from 'react-native'
import { getSize, width } from '@/utils'

export const styles = StyleSheet.create({
  rowInput: {
    flexDirection: 'row',
    marginTop: getSize.m(24),
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
