import Texting from '@/components/Texting'
import React from 'react'
import { Pressable, View } from 'react-native'
import { styles } from './styles'

const EventList = ({
  icon,
  title,
  warning,
  notifNumber,
  widthing,
  backgroundColor,
  paddingHorizontal,
  onPress,
  style,
}) => {
  return (
    <View style={{ ...styles.wrapperCardTop, ...style }}>
      <Pressable
        onPress={onPress}
        style={{
          ...styles.inSideLeftCard,
          backgroundColor: backgroundColor,
          paddingHorizontal: paddingHorizontal,
        }}
      >
        <Pressable>{icon}</Pressable>

        <Texting
          title={title}
          textStyle={[styles.textTitle]}
          style={[styles.wrapTextTitle, { width: widthing || undefined }]}
        />
      </Pressable>

      {warning && (
        <Pressable style={styles.inSideRightCard}>
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
