import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperFormInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  wrapperContentInput: {
    flexDirection: 'row',
    paddingVertical: getSize.m(0),
    alignItems: 'center',
  },
  wrapperIconInput: {
    paddingLeft: getSize.m(16),
  },
  txtInput: {
    marginHorizontal: getSize.m(10),
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    marginTop: getSize.m(4),
    color: COLORS.secondary,
    flex: 1,
    padding: getSize.m(16),
  },
  wrapperRightInput: {
    justifyContent: 'flex-end',
    paddingRight: getSize.m(16),
  },
})
export default styles
