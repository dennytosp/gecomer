import { icons } from '@/assets'
import { COLORS, FONTS } from '@/constants'
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
import { getSize } from '@/utils'

const CustomTabBar = ({ state, descriptors, navigation }) => {
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
        const iconselect =
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
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}
          >
            {index === 3 && (
              <Badge
                status="error"
                containerStyle={styles.containerStyle}
                badgeStyle={styles.badgeStyle}
                textProps={{ allowFontScaling: false }}
                value="1"
              />
            )}
            <Image
              source={isFocused ? iconselect : icon}
              style={styles.iconStyle(isFocused)}
            />
            <Text style={styles.textLabel(isFocused)}>{label}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}
export default CustomTabBar

const styles = StyleSheet.create({
  btn: { flex: 1, alignItems: 'center' },
  textLabel: isFocused => ({
    color: isFocused ? COLORS.primary : COLORS.grey,
    marginTop: 12.6 / 2,
    fontSize: 10,
    fontFamily: FONTS.regular,
  }),
  iconStyle: isFocused => ({
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: isFocused ? COLORS.primary : COLORS.grey,
  }),
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
