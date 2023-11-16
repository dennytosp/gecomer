import { DATA_SOFT_BY } from '@/assets'
import { Header, Texting } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const SoftBy = () => {
  const _renderCenter = ({ item }) => {
    return (
      <View
        style={[
          styles.wrapperCenter,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <Texting
          title={item.title}
          textStyle={[styles.textTitle, { color: item.colors }]}
          style={[styles.wrapTitle]}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Soft By" paddingHorizontal={getSize.m(16)} topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_SOFT_BY}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default SoftBy
