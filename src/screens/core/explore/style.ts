import { COLORS } from '@/theme'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperHeader: {
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperContent: {},
  onScroll: {
    marginTop: getSize.m(16),
    paddingHorizontal: getSize.m(16),
  },
})
export default styles
