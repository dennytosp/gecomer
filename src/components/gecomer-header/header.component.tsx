import { Forward } from '@/assets'
import { getSize, isAndroid } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { FC } from 'react'
import {
  ColorValue,
  DimensionValue,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Texting from '../text/text.component'
import { styles } from './header.style'

type HeaderProps = {
  title: string
  leftIcon?: () => JSX.Element
  rightIconStart?: () => JSX.Element
  rightIconEnd?: () => JSX.Element
  onPressRightStart?: () => void
  onPressRightEnd?: () => void
  numberOfLines?: number
  hideLeftIcon?: boolean
  backgroundColor?: ColorValue | undefined
  paddingHorizontal?: DimensionValue | undefined
  topLine?: boolean
  style?: StyleProp<ViewStyle>
}

const Header: FC<HeaderProps> = ({
  style,
  title,
  leftIcon,
  hideLeftIcon,
  rightIconStart,
  rightIconEnd,
  numberOfLines,
  backgroundColor,
  onPressRightStart,
  onPressRightEnd,
  paddingHorizontal,
  topLine,
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <View style={[styles.wrapperFullHeader, style]}>
      <SafeAreaView
        edges={['top']}
        style={[
          isAndroid && { marginTop: getSize.m(16) },
          { paddingHorizontal: paddingHorizontal },
          styles.wrapperHeader,
        ]}
      >
        <View style={[styles.wrapperLeft]}>
          {!hideLeftIcon && (
            <Pressable onPress={() => navigation.goBack()}>
              {leftIcon ?? <Forward />}
            </Pressable>
          )}

          <Texting
            title={title}
            inputProps={{ numberOfLines }}
            textStyle={[styles.textHeader]}
            style={[
              {
                marginHorizontal: hideLeftIcon ? getSize.m(0) : getSize.m(16),
                backgroundColor,
              },
            ]}
          />
        </View>

        <View style={[styles.wrapperRight]}>
          {rightIconStart && (
            <Pressable
              onPress={onPressRightStart}
              style={{ marginLeft: getSize.m(16) }}
            >
              {rightIconStart}
            </Pressable>
          )}

          {rightIconEnd && (
            <Pressable
              onPress={onPressRightEnd}
              style={{ marginLeft: getSize.m(16) }}
            >
              {rightIconEnd}
            </Pressable>
          )}
        </View>
      </SafeAreaView>

      <View
        style={[
          { marginBottom: topLine ? 0 : getSize.m(16) },
          styles.wrapperLines,
        ]}
      />
    </View>
  )
}

export default Header
