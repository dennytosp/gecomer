import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/constants'
import { MetricsSizes, getSize } from '@/utils'

export const styles = StyleSheet.create({
  container: {
    marginTop: MetricsSizes.large,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  titleStyle: {
    color: COLORS.secondary,
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    marginBottom: getSize.m(12),
  },
  textInput: {
    flex: 1,
    // marginHorizontal: getSize.m(10),
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    marginTop: getSize.m(4),
    color: COLORS.secondary,
    padding: 0,
  },
  enabledBorderWidth: {
    borderWidth: 1,
    borderRadius: getSize.m(5),
  },
  shadowFocus: {
    shadowOffset: { width: getSize.m(4), height: getSize.m(4) },
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: getSize.m(8),
    elevation: getSize.m(4),
  },
  customStyle: {
    marginLeft: MetricsSizes.tiny,
  },
  textErrorWarning: {
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    color: COLORS.red,
    marginTop: getSize.m(6),
  },
})
