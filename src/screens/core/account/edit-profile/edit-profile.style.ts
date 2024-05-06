import { StyleSheet } from 'react-native'
import { getSize } from '@/utils'
import { COLORS } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperContent: {
    marginTop: getSize.m(16),
  },
})
export default styles
