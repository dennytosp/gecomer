import { Logo } from '@/assets'
import { routes } from '@/navigation/routes'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routes.AUTHENTICATION, {
        screen: routes.LOGIN,
      })
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}

export default Splash
