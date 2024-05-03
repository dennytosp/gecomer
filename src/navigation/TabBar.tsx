import { icons } from '@/assets'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Badge } from 'react-native-elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.wrapTabBar,
        { paddingBottom: Platform.OS === 'ios' ? bottom : 10 },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index
        const icon =
          index === 0
            ? icons.home
            : index === 1
              ? icons.favorite
              : index === 2
                ? icons.product
                : index === 3
                  ? icons.bag
                  : icons.profile
        const selectedIcon =
          index === 0
            ? icons.home
            : index === 1
              ? icons.favorite
              : index === 2
                ? icons.product
                : index === 3
                  ? icons.bag
                  : icons.profile
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <Pressable
            key={`tab-bar${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.btn]}
          >
            {index === 3 && (
              <Badge
                status="error"
                containerStyle={[styles.containerStyle]}
                badgeStyle={[styles.badgeStyle]}
                textProps={{ allowFontScaling: false }}
                value="1"
              />
            )}
            <Image
              source={isFocused ? selectedIcon : icon}
              style={[
                { tintColor: isFocused ? COLORS.primary : COLORS.grey },
                styles.iconStyle,
              ]}
            />

            <Text
              style={[
                { color: isFocused ? COLORS.primary : COLORS.grey },
                styles.textLabel,
              ]}
            >
              {String(label)}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  btn: { flex: 1, alignItems: 'center' },
  textLabel: {
    marginTop: 12.6 / 2,
    fontSize: 10,
    fontFamily: FONTS.regular,
  },
  iconStyle: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(21),
  },
  wrapTabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  badgeStyle: { borderColor: COLORS.white, borderWidth: 1 },
})
