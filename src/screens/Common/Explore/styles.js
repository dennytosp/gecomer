import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperContent: {},
  onScroll: {
    marginTop: getSize.m(16),
  },
})
export default styles
