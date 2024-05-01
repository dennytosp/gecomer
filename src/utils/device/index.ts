import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage'
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback'
import {
  SensorTypes,
  accelerometer,
  setUpdateIntervalForType,
} from 'react-native-sensors'
import { v4 as uuidV4 } from 'uuid'
import { EncryptedKey } from '../storage/type'

const pixelDensity = PixelRatio.get()

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window')

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const isTablet = () => {
  const adjustedWidth = screenWidth * pixelDensity
  const adjustedHeight = screenHeight * pixelDensity
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    )
  }
}

const X_WIDTH = 375
const X_HEIGHT = 812

const XS_MAX_WIDTH = 414
const XS_MAX_HEIGHT = 896

const IP12_ZOOM_WIDTH = 320
const IP12_ZOOM_HEIGHT = 693

const IP12_WIDTH = 390
const IP12_HEIGHT = 844

const IP12MAX_WIDTH = 428
const IP12MAX_HEIGHT = 926

const IP14PRO_WIDTH = 393
const IP14PRO_HEIGHT = 852

const IP14MAX_WIDTH = 430
const IP14MAX_HEIGHT = 932

const EMULATOR_WIDTH = 411
const EMULATOR_HEIGHT = 867

export const fetchDeviceUID = async (): Promise<string> => {
  let uuid = uuidV4()
  let fetchUUID = await EncryptedStorage.getItem(EncryptedKey.SECURE_DEVICE_ID)

  //if user has already signed up prior
  if (fetchUUID) {
    uuid = JSON.parse(fetchUUID)
  } else {
    await EncryptedStorage.setItem(
      EncryptedKey.SECURE_DEVICE_ID,
      JSON.stringify(uuid),
    )
  }

  console.log('DeviceUID', uuid)
  return uuid
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
}

export const haptics = (type?: HapticFeedbackTypes): void => {
  ReactNativeHapticFeedback.trigger(type || 'impactLight', options)
}

export const addSensorListener = (onShake: Function) => {
  const THRESHOLD = 1.8
  let lastUpdate = 0
  setUpdateIntervalForType(SensorTypes.accelerometer, 200)
  accelerometer.subscribe(({ x, y, z }) => {
    const acceleration = Math.sqrt(x * x + y * y + z * z)
    let currTime = Date.now()
    if (currTime - lastUpdate > 2000) {
      if (acceleration >= THRESHOLD) {
        lastUpdate = currTime
        onShake()
      }
    }
  })
}

export const hasNotch = (): boolean => {
  if (Platform.OS !== 'ios' || Platform.isPad || Platform.isTV) {
    return false
  }
  if (
    (screenWidth === X_WIDTH && screenHeight === X_HEIGHT) ||
    (screenWidth === XS_MAX_WIDTH && screenHeight === XS_MAX_HEIGHT) ||
    (screenWidth === IP12_ZOOM_WIDTH && screenHeight === IP12_ZOOM_HEIGHT) ||
    (screenWidth === IP12_WIDTH && screenHeight === IP12_HEIGHT) ||
    (screenWidth === IP12MAX_WIDTH && screenHeight === IP12MAX_HEIGHT) ||
    (screenWidth === IP12MAX_WIDTH && screenHeight === IP12MAX_HEIGHT) ||
    (screenWidth === IP14PRO_WIDTH && screenHeight === IP14PRO_HEIGHT) ||
    (screenWidth === IP14MAX_WIDTH && screenHeight === IP14MAX_HEIGHT)
  ) {
    return true
  }
  return false
}

const getEmulator = () => {
  if (
    Math.floor(screenWidth) === EMULATOR_WIDTH &&
    Math.floor(screenHeight) === EMULATOR_HEIGHT
  ) {
    return true
  }

  return false
}

export const isEmulator = getEmulator()

export function ifHasNotch(iphoneXStyle: any, regularStyle: any) {
  if (hasNotch()) {
    return iphoneXStyle
  }
  return regularStyle
}

export function getStatusBarHeight(safe: any) {
  return Platform.select({
    ios: ifHasNotch(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  })
}

export function getBottomSpace() {
  return hasNotch() ? 34 : 0
}
