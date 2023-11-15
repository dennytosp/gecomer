import React from 'react'
import { View, FlatList, Pressable, Image } from 'react-native'
import styles from './styles'
import { Header, Texting } from '@/components'
import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { Titling } from '@/components'
import { DATA_FEED_NOTI } from '@/assets'

const FeedNotification = () => {
  const _renderCenter = ({ item }) => {
    return (
      <View style={styles.wrapperCenter}>
        <Pressable>
          <Image source={item.image} style={styles.imageProduct} />
        </Pressable>
        <View style={styles.wrapperContentCenter}>
          <Titling title={item.title} marginBottom={getSize.m(4)} />
          <Texting
            title={item.content}
            textAlign="justify"
            marginBottom={getSize.m(4)}
          />
          <Texting
            title={item.time}
            fontSize={getSize.m(10)}
            color={COLORS.secondary}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Feed" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_FEED_NOTI}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default FeedNotification
