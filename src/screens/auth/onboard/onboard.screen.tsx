import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ONBOARD_DATA } from '@/assets'
import { Text } from '@/components'
import { RoutesAuthStack, RoutesMainStack } from '@/navigators/routes'
import { COLORS } from '@/theme'
import { styles } from './onboard.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.COMMON_STACK>

const OnboardScreen = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderNextButton = () => {
    return (
      <View style={[styles.rightTextWrapper]}>
        <Text textStyle={[styles.rightText]} title="Next" />
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
        <Text textStyle={[styles.doneButtonText]} title="Go" />
      </LinearGradient>
    )
  }

  const renderPrevButton = () => {
    return (
      <View style={[styles.leftTextWrapper]}>
        <Text textStyle={[styles.leftText]} title="Back" />
      </View>
    )
  }

  const handleDone = () => {
    navigation.navigate(RoutesMainStack.AUTH_STACK, {
      screen: RoutesAuthStack.SIGN_UP,
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
              <Text textStyle={[styles.title]} title={item.title} />
              <Text textStyle={[styles.text]} title={item.text} />
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

export default OnboardScreen
