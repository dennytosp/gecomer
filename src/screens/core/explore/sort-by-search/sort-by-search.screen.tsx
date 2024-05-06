import { DATA_SOFT_BY } from '@/assets'
import { Header, Text } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './sort-by-search.style'

const SoftBy = () => {
  const renderCenter = ({ item }: { item: (typeof DATA_SOFT_BY)[0] }) => (
    <View
      style={[styles.wrapperCenter, { backgroundColor: item.backgroundColor }]}
    >
      <Text
        title={item.title}
        textStyle={[styles.textTitle, { color: item.colors }]}
        style={[styles.wrapTitle]}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Soft By" paddingHorizontal={getSize.m(16)} topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_SOFT_BY}
        renderItem={renderCenter}
        keyExtractor={(item, index) => `explore-soft-by-${index}`}
      />
    </View>
  )
}

export default SoftBy
