import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperButton: (
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
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(4),
    alignItems: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: getSize.s(4),
      height: getSize.v(8),
    },
    shadowOpacity: 0.2,
    shadowRadius: getSize.m(8),
    elevation: getSize.m(4),
    marginVertical: marginVertical,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  }),
})
export default styles
