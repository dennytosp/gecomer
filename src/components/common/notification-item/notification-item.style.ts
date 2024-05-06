import { StyleSheet } from 'react-native'
import { getSize } from '@/utils'
import { COLORS } from '@/constants'

export const styles = StyleSheet.create({
  wrapperCenter: {
    flexDirection: 'row',
    marginBottom: getSize.m(32),
  },
  wrapperContentCenter: {
    marginLeft: getSize.m(12),
    flex: 1,
  },
  textContent: {
    textAlign: 'justify',
  },
  textTime: {
    color: COLORS.secondary,
    fontSize: getSize.m(10),
  },
})
