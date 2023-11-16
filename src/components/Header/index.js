import { Forward } from '@/assets'
import { getSize, isAndroid } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Texting from '../Texting'
import { styles } from './styles'

const Header = ({
  style,
  title,
  iconLeft,
  disableIconLeft,
  iconRight01,
  iconRight02,
  numberOfLines,
  backgroundColor,
  widthHeader,
  heightHeader,
  maxWidth,
  onPressRight01,
  onPressRight02,
  paddingHorizontal,
  topLine,
}) => {
  const navigation = useNavigation()

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
        <View style={styles.wrapperLeft}>
          {!disableIconLeft && (
            <Pressable onPress={() => navigation.goBack()}>
              {iconLeft ? iconLeft : <Forward />}
            </Pressable>
          )}

          <Texting
            title={title}
            inputProps={{ numberOfLines }}
            textStyle={[styles.textHeader]}
            style={[
              {
                marginHorizontal: disableIconLeft
                  ? getSize.m(0)
                  : getSize.m(16),
                width: widthHeader,
                height: heightHeader,
                maxWidth,
                backgroundColor,
              },
            ]}
          />
        </View>

        <View style={styles.wrapperRight}>
          {iconRight01 && (
            <Pressable
              onPress={onPressRight01}
              style={{ marginLeft: getSize.m(16) }}
            >
              {iconRight01}
            </Pressable>
          )}

          {iconRight02 && (
            <Pressable
              onPress={onPressRight02}
              style={{ marginLeft: getSize.m(16) }}
            >
              {iconRight02}
            </Pressable>
          )}
        </View>
      </SafeAreaView>

      <View
        style={{
          marginBottom: topLine ? 0 : getSize.m(16),
          ...styles.wrapperLines,
        }}
      />
    </View>
  )
}

export default Header
