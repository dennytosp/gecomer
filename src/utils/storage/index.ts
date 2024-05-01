import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncKey, ENVName } from './type'

const getDataAsync = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value) {
      return value
    }

    return undefined
  } catch (e) {
    return undefined
  }
}

const setDataAsync = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (e) {
    return false
  }
}

const removeDataAsync = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

const removeAllKeyAsync = async () => {
  try {
    await AsyncStorage.clear()
    return true
  } catch (e) {
    return false
  }
}

const getEnvironmentAsync = async () => {
  let environment = ''

  const envStorage = await getDataAsync(AsyncKey.ENV)
  if (envStorage) {
    environment = JSON.parse(envStorage)
  }

  return environment
}

const setEnvironmentAsync = async (
  value: ENVName.Development | ENVName.Staging | ENVName.Production,
) => {
  return await setDataAsync(AsyncKey.ENV, JSON.stringify(value))
}

const getLanguageAsync = async () => {
  let language = 'en'

  const languageStorage = await getDataAsync(AsyncKey.LANGUAGE)
  if (languageStorage) {
    language = JSON.parse(languageStorage)
  }

  return language
}

const setLanguageAsync = async (value: string) => {
  return await setDataAsync(AsyncKey.LANGUAGE, JSON.stringify(value))
}

export {
  /* Get */
  getDataAsync,
  getEnvironmentAsync,
  getLanguageAsync,

  /* Remove */
  removeAllKeyAsync,
  removeDataAsync,

  /* Set */
  setDataAsync,
  setEnvironmentAsync,
  setLanguageAsync,
}
