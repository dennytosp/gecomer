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
    marginBottom: getSize.m(32),
  },
  imageProduct: {
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(5),
  },
  wrapperContentCenter: {
    marginLeft: getSize.m(12),
    flex: 1,
  },
  textTime: {
    fontSize: getSize.m(10),
    color: COLORS.secondary,
  },
})
