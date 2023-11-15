import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperSocial: (
    marginVertical,
    paddingHorizontal,
    paddingVertical,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  ) => ({
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: marginVertical,
    paddingHorizontal: paddingHorizontal,
    paddingVertical,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  }),
  wrapperIconSocial: {
    position: 'absolute',
    left: getSize.s(16),
    top: getSize.s(13),
  },
})
export default styles
