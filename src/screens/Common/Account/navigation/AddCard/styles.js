import { StyleSheet } from 'react-native'
import { getSize, width } from '@/utils'
import { COLORS } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
})
export default styles
