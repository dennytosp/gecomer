import { DATA_CATEGORY_SOFT } from '@/assets'
import { Header, Texting } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styles } from './styles'

const Category = () => {
  const _renderCenter = ({ item }) => {
    return (
      <View
        style={{
          ...styles.wrapperCenter,
          backgroundColor: item.backgroundColor,
        }}
      >
        <Pressable style={styles.icon}>{item.image}</Pressable>

        <Texting
          title={item.title}
          textStyle={[styles.textTitle]}
          style={[styles.wrapTextTitle]}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Category" topLine paddingHorizontal={getSize.m(16)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_CATEGORY_SOFT}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Category
