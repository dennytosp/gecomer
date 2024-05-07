import { DATA_FEED_NOTICATIONS } from '@/assets'
import { Header, Text, Title } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { styles } from './feed-notification.style'

const FeedNotificationScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: (typeof DATA_FEED_NOTICATIONS)[0]
  }) => (
    <View style={[styles.wrapperCenter]}>
      <Pressable>
        <Image source={item.image} style={[styles.imageProduct]} />
      </Pressable>

      <View style={[styles.wrapperContentCenter]}>
        <Title title={item.title} style={[{ marginBottom: getSize.m(4) }]} />
        <Text
          title={item.content}
          textStyle={[{ textAlign: 'justify' }]}
          style={[{ marginBottom: getSize.m(4) }]}
        />

        <Text title={item.time} textStyle={[styles.textTime]} />
      </View>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Feed" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_FEED_NOTICATIONS}
        renderItem={renderItem}
        keyExtractor={(item, index) => `feed-notifications--${index}`}
      />
    </View>
  )
}

export default FeedNotificationScreen
