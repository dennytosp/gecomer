import { Logo } from '@/assets'
import { routes } from '@/navigation/routes'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.AUTHENTICATION, {
        screen: routes.LOGIN,
      })
    }, 2000)
  }, [])

  return (
    <View style={[styles.container]}>
      <Logo />
    </View>
  )
}

export default Splash
