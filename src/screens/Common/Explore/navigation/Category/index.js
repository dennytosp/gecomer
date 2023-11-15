import React from 'react'
import { View, FlatList, Pressable } from 'react-native'
import styles from './styles'
import { Texting } from '@/components'
import { DATA_CATEGORY_SOFT } from '@/assets'
import { getSize } from '@/utils'
import { Header } from '@/components'
import { COLORS, FONTS } from '@/constants'

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
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
          paddingHorizontal={getSize.m(16)}
          paddingVertical={getSize.m(16)}
          fontSize={getSize.m(12)}
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
