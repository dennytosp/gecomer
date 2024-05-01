import { ONBOARD_DATA } from '@/assets'
import { COLORS } from '@/constants'
import { routes } from '@/navigation/routes'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

const Onboard = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderNextButton = () => {
    return (
      <View style={[styles.rightTextWrapper]}>
        <Text style={[styles.rightText]}>Next</Text>
      </View>
    )
  }

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={[COLORS.black01, COLORS.black01]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[styles.linearGradient, styles.doneButtonWrapper]}
      >
        <Text style={[styles.doneButtonText]}>Go</Text>
      </LinearGradient>
    )
  }

  const renderPrevButton = () => {
    return (
      <View style={[styles.leftTextWrapper]}>
        <Text style={[styles.leftText]}>Back</Text>
      </View>
    )
  }

  const handleDone = () => {
    navigation.navigate(routes.AUTHENTICATION, {
      screen: routes.REGISTER,
    })
  }

  return (
    <View style={[{ flex: 1 }]}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={item => `onboard-${item.title}`}
        renderItem={({ item }) => (
          <View style={[styles.slide]}>
            <Image
              source={item.image}
              style={[styles.image, { marginTop: top + 125 }]}
            />
            <View>
              <Text style={[styles.title]}>{item.title}</Text>
              <Text style={[styles.text]}>{item.text}</Text>
            </View>
          </View>
        )}
        data={ONBOARD_DATA}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  )
}

export default Onboard
