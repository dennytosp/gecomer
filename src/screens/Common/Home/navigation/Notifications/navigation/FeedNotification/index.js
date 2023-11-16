import { DATA_FEED_NOTI } from '@/assets'
import { Header, Texting, Titling } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const FeedNotification = () => {
  const renderCenter = ({ item }) => (
    <View style={styles.wrapperCenter}>
      <Pressable>
        <Image source={item.image} style={styles.imageProduct} />
      </Pressable>

      <View style={styles.wrapperContentCenter}>
        <Titling title={item.title} style={[{ marginBottom: getSize.m(4) }]} />
        <Texting
          title={item.content}
          textStyle={[{ textAlign: 'justify' }]}
          style={[{ marginBottom: getSize.m(4) }]}
        />

        <Texting title={item.time} textStyle={[styles.textTime]} />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="Feed" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_FEED_NOTI}
        renderItem={renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default FeedNotification
