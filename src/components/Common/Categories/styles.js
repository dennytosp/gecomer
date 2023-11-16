import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCategories: {},
  wrapperHeaderCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
  },
  wrapperEventCategories: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperImageEvent: {
    width: getSize.s(70),
    height: getSize.v(70),
    borderRadius: getSize.s(100 / 2),
    borderColor: COLORS.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getSize.m(8),
  },
  imageEvent: {},
  textTitle: {
    fontSize: getSize.m(10),
    textAlign: 'center',
  },
})
