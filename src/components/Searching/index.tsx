import { SearchPrimary } from '@/assets'
import { COLORS } from '@/constants'
import { getSize, isAndroid } from '@/utils'
import React from 'react'
import {
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'

interface Props extends TextInputProps {
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
  editable?: boolean
  rightIconInput?: () => JSX.Element
  rightIcon?: () => JSX.Element
  rightIconStart?: () => JSX.Element
  onPressInput?: () => void
  onPressRight?: () => void
  onPressRightStart?: () => void
  onPressRightInput?: () => void
  style?: StyleProp<ViewStyle>
}

const Searching = ({
  style,
  onChangeText,
  rightIconInput,
  rightIcon,
  rightIconStart,
  onPressInput,
  onPressRight,
  onPressRightInput,
  onPressRightStart,
  ...rest
}: Props) => {
  return (
    <SafeAreaView edges={['top']}>
      <View
        style={[
          isAndroid && { marginTop: getSize.m(16) },
          styles.wrapperHeader,
          style,
        ]}>
        <Pressable onPressIn={onPressInput} style={[styles.wrapperSearch]}>
          <SearchPrimary />
          <TextInput
            placeholderTextColor={COLORS.grey}
            style={[styles.input]}
            {...rest}
          />
          <Pressable onPress={onPressRightInput}>{rightIconInput}</Pressable>
        </Pressable>

        <Pressable onPress={onPressRight} style={[styles.wrapperFavorite]}>
          {rightIcon}
        </Pressable>

        <Pressable onPress={onPressRightStart}>{rightIconStart}</Pressable>
      </View>

      <View style={[styles.wrapperLines]} />
    </SafeAreaView>
  )
}

export default Searching
