import Text from '@/components/text/text.component'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './event-item.style'

type Props = {
  icon?: () => JSX.Element
  title: string
  numberOfNotification?: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const EventItem = ({
  icon,
  title,
  numberOfNotification,
  onPress,
  style,
}: Props) => {
  return (
    <View style={[styles.wrapperCardTop, style]}>
      <Pressable onPress={onPress} style={[styles.inSideLeftCard]}>
        <Pressable>{icon}</Pressable>

        <Text
          title={title}
          textStyle={[styles.textTitle]}
          style={[styles.wrapTextTitle]}
        />
      </Pressable>

      {numberOfNotification && (
        <Pressable style={[styles.inSideRightCard]}>
          <Text
            title={numberOfNotification}
            textStyle={[styles.textNotificationNumber]}
          />
        </Pressable>
      )}
    </View>
  )
}

export default EventItem
