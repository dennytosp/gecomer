import { COLORS, FONTS } from '@/theme'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperSocial: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...AppStyles.columnCenter,
  },
  wrapperIconSocial: {
    position: 'absolute',
    left: getSize.s(16),
    top: getSize.s(13),
  },
  textButton: {
    fontFamily: FONTS.bold,
    paddingVertical: getSize.m(16),
  },
})
export default styles
