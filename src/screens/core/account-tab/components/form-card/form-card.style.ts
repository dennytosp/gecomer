import { getSize, width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rowInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  widthRow: {
    width: width / 2 - getSize.m(24),
  },
})
