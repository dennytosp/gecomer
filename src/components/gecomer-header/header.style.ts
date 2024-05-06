import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/constants'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'

export const styles = StyleSheet.create({
  wrapperFullHeader: {},
  wrapperHeader: {
    ...AppStyles.rowCenterBetween,
  },
  wrapperLeft: {
    ...AppStyles.rowVCenter,
  },
  wrapperRight: {
    ...AppStyles.rowVCenter,
  },
  wrapperLines: {
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginTop: getSize.m(20),
    marginHorizontal: getSize.m(-16),
  },
  textHeader: {
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
    fontSize: getSize.m(16),
  },
})
