import { Forward } from '@/assets'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Texting from '../Texting'
import styles from './styles'

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
  const insets = useSafeAreaInsets()

  return (
    <View style={{ ...styles.wrapperFullHeader, ...style }}>
      <View
        style={{
          marginTop: insets.top,
          paddingHorizontal: paddingHorizontal,
          ...styles.wrapperHeader,
        }}
      >
        <Pressable style={styles.wrapperLeft}>
          {!disableIconLeft && (
            <Pressable onPress={() => navigation.goBack()}>
              {iconLeft ? iconLeft : <Forward />}
            </Pressable>
          )}

          <Texting
            title={title}
            fontFamily={FONTS.bold}
            fontSize={16}
            color={COLORS.secondary}
            marginHorizontal={disableIconLeft ? getSize.m(0) : getSize.m(16)}
            marginTop={getSize.m(3.5)}
            numberOfLines={numberOfLines}
            backgroundColor={backgroundColor}
            width={widthHeader}
            height={heightHeader}
            maxWidth={maxWidth}
          />
        </Pressable>

        <View style={styles.wrapperRight}>
          <Pressable
            onPress={onPressRight01}
            style={{ paddingHorizontal: getSize.m(16) }}
          >
            {iconRight01}
          </Pressable>

          <Pressable onPress={onPressRight02}>{iconRight02}</Pressable>
        </View>
      </View>

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
