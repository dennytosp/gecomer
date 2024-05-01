import Texting from '@/components/Texting'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = {
  icon?: () => JSX.Element
  title: string
  numberOfNotification?: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const EventList = ({
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

        <Texting
          title={title}
          textStyle={[styles.textTitle]}
          style={[styles.wrapTextTitle]}
        />
      </Pressable>

      {numberOfNotification && (
        <Pressable style={[styles.inSideRightCard]}>
          <Texting
            title={numberOfNotification}
            textStyle={[styles.textNotificationNumber]}
          />
        </Pressable>
      )}
    </View>
  )
}

export default EventList
