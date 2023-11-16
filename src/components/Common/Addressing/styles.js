import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCenter: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(1),
    borderRadius: getSize.s(5),
    padding: getSize.m(24),
    marginBottom: getSize.m(16),
  },
  wrapperOnEvent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onEdit: {
    width: getSize.s(77),
    height: getSize.v(57),
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  onRemove: {
    marginHorizontal: getSize.m(24),
  },
  textName: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  textEdit: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
})
