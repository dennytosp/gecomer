import Texting from '@/components/Texting'
import React from 'react'
import {
  ColorValue,
  DimensionValue,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './styles'

type Props = {
  icon?: () => JSX.Element
  title: string
  notifNumber?: string
  widthing?: DimensionValue | undefined
  backgroundColor?: ColorValue | undefined
  paddingHorizontal?: DimensionValue | undefined
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const EventList = ({
  icon,
  title,
  notifNumber,
  widthing,
  backgroundColor,
  paddingHorizontal,
  onPress,
  style,
}: Props) => {
  return (
    <View style={[styles.wrapperCardTop, style]}>
      <Pressable
        onPress={onPress}
        style={[{ backgroundColor, paddingHorizontal }, styles.inSideLeftCard]}
      >
        <Pressable>{icon}</Pressable>

        <Texting
          title={title}
          textStyle={[styles.textTitle]}
          style={[styles.wrapTextTitle, { width: widthing }]}
        />
      </Pressable>

      {notifNumber && (
        <Pressable style={[styles.inSideRightCard]}>
          <Texting
            title={notifNumber}
            textStyle={[styles.textNotificationNumber]}
          />
        </Pressable>
      )}
    </View>
  )
}

export default EventList
