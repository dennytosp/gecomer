/* @ts-ignore  */
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings'
/* */
import { get as customGet, truncate } from 'lodash'

const get = (
  val: object,
  path: string[] = [],
  defaultValue: any = undefined,
) => {
  const result = customGet(val, path, defaultValue)
  if (typeof result === 'object' && !result) {
    return defaultValue
  }

  return result
}

const debounce = (calLback: (...args: any) => void, delay: number) => {
  let timeout: number | NodeJS.Timeout = 0

  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      calLback(...args)
    }, delay)
  }
}

const mockArray = () => {
  let randomArray = []
  for (var i = 0; i < 25; i++) {
    randomArray.push(Math.floor(Math.random() * 101))
  }

  return randomArray
}

const maskInputNumber = (input: string, format = '####') => {
  const digitsOnly = input.replace(/[^\d]/g, '')
  let formatted = ''
  let digitIndex = 0

  for (let i = 0; i < format.length; i++) {
    const formatChar = format[i]

    if (formatChar === format.slice(-1)) {
      if (digitIndex < digitsOnly.length) {
        formatted += digitsOnly[digitIndex]
        digitIndex++
      } else {
        break
      }
    } else {
      formatted += formatChar
    }
  }

  let nonNumericCount = 0
  for (let i = formatted.length - 1; i >= 0; i--) {
    if (/\D/.test(formatted[i])) {
      nonNumericCount++
    } else {
      break
    }
  }

  if (nonNumericCount > 0) {
    formatted = formatted.slice(0, -nonNumericCount)
  }

  return formatted
}

const convertNumeric = (str: string) => {
  const nonNumericRegex = /[^0-9]/g
  const removedStr = str.replace(nonNumericRegex, '')

  return removedStr
}

const removeHTMLTags = (text: string) => {
  return text.replace(/<(?:.|\n)*?>/gm, '')
}

const truncateText = (text: string, maxWords?: number, separator?: string) => {
  const truncatedText = truncate(text, {
    length: maxWords || 100,
    separator: separator || '...',
  })
  return truncatedText
}

const convertToUnsignedString = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const connectToRemoteDebugger = (isDebugging: boolean) => {
  NativeDevSettings.setIsDebuggingRemotely(isDebugging)
}

const getLeadingZeros = (num: number) => {
  if (num < 10) {
    return '0' + num
  }
  return num.toString()
}

const getFormattedTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)

  let days = getLeadingZeros(Math.floor(totalHours / 24))
  let seconds = getLeadingZeros(totalSeconds % 60)
  let minutes = getLeadingZeros(totalMinutes % 60)
  let hours = getLeadingZeros(totalHours % 24)

  return { days, hours, minutes, seconds }
}

export {
  connectToRemoteDebugger,
  convertNumeric,
  convertToUnsignedString,
  debounce,
  get,
  maskInputNumber,
  mockArray,
  removeHTMLTags,
  truncateText,
  getLeadingZeros,
  getFormattedTime,
}
