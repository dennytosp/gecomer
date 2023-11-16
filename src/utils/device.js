import { Platform } from 'react-native'

const isIos = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'

export { isIos, isAndroid }
