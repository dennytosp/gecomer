import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperFooter: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(2 / 2),
    borderRadius: getSize.m(5),
    padding: getSize.m(16),
  },
  rowFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBase: {
    color: COLORS.secondary,
  },
  textRight: {
    color: COLORS.secondary,
    textAlign: 'right',
  },
})
