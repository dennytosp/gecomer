import { COLORS, FONTS } from '@/constants'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCenter: {
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: getSize.m(24),
    marginBottom: getSize.m(16),
  },
  wrapperOnEvent: {
    ...AppStyles.rowVCenter,
  },
  editButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: getSize.m(24),
    marginTop: 0,
  },
  onRemove: {
    marginHorizontal: getSize.m(24),
  },
  textName: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
})
