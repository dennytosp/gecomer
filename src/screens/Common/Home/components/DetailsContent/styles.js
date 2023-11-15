import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperContent: {
    paddingHorizontal: getSize.m(16),
    marginBottom: getSize.m(12),
  },
  wrapperTitleTexting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperSelectSizes: {
    marginBottom: getSize.m(24),
    borderWidth: getSize.m(1),
    borderColor: COLORS.border,
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSelectColors: {
    marginBottom: getSize.m(24),
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSpecification: {
    marginBottom: getSize.m(24),
  },
  wrapperText01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperSubTitleStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getSize.m(16),
  },
  wrapperProducts: {
    marginTop: getSize.m(12),
  },
})
export default styles
