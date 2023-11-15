import { StyleSheet } from 'react-native'
import { getSize } from '@/utils'

export const styles = StyleSheet.create({
  wrapperCenter: {
    flexDirection: 'row',
    marginBottom: getSize.m(32),
  },
  wrapperContentCenter: {
    marginLeft: getSize.m(12),
    flex: 1,
  },
})
export default styles
