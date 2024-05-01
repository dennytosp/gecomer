import { COLORS, FONTS } from '@/constants'
import { AppStyles, getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCardTop: {
    ...AppStyles.rowCenterBetween,
  },
  inSideLeftCard: {
    ...AppStyles.rowVCenter,
    flex: 1,
  },
  inSideRightCard: {
    ...AppStyles.rowCenter,
    backgroundColor: COLORS.pale_red,
    width: getSize.s(20),
    height: getSize.v(20),
    borderRadius: getSize.s(20 / 2),
    marginLeft: getSize.m(16),
  },
  wrapTextTitle: {
    marginHorizontal: getSize.m(16),
    paddingVertical: getSize.m(16),
  },
  textTitle: {
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  textNotificationNumber: {
    fontFamily: FONTS.black,
    fontSize: getSize.m(10),
    color: COLORS.white,
  },
})
