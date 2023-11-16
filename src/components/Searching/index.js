import { SearchPrimary } from '@/assets'
import { COLORS } from '@/constants'
import React from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'
import { getSize, isAndroid } from '@/utils'

const Searching = ({
  style,
  placeholder,
  value,
  onChangeText,
  editable,
  iconRightInput,
  iconRight,
  iconRight01,
  onPressInput,
  onPressRight,
  onPressRightInput,
  onPressRight01,
}) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ ...style }}>
      <SafeAreaView
        edges={['top']}
        style={[
          isAndroid && { marginTop: getSize.m(16) },
          styles.wrapperHeader,
        ]}
      >
        <Pressable onPressIn={onPressInput} style={styles.wrapperSearch}>
          <SearchPrimary />
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={COLORS.grey}
            editable={!editable ? false : true}
            style={styles.input}
          />
          <Pressable onPress={onPressRightInput}>{iconRightInput}</Pressable>
        </Pressable>

        <Pressable onPress={onPressRight} style={styles.wrapperFavorite}>
          {iconRight}
        </Pressable>
        <Pressable onPress={onPressRight01} style={styles.wrapperNotification}>
          {iconRight01}
        </Pressable>
      </SafeAreaView>
      <View style={{ ...styles.wrapperLines }}></View>
    </View>
  )
}

export default Searching
