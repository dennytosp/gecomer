import { ActivityListNotifi, DATA_ACTIVITY_NOTIFICATIONS } from '@/assets'
import { Header, NotificationItem } from '@/components'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const ActivityNotification = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Activity" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ACTIVITY_NOTIFICATIONS}
        renderItem={({ item }) => (
          <NotificationItem
            image={ActivityListNotifi}
            title={item.title}
            content={item.content}
            time={item.time}
          />
        )}
        keyExtractor={(item, index) => `activity-notifications--${index}`}
      />
    </View>
  )
}

export default ActivityNotification
