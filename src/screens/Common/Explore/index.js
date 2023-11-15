import {
  Favorite,
  MAN_FASHION_DATA,
  Notifications,
  WOMAN_FASHION_DATA,
} from '@/assets'
import { Categories, Searching, Titling } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import styles from './styles'

const Explore = () => {
  const navigation = useNavigation()
  const numColumns = 4

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Searching
          iconRight={Favorite}
          onPressRight={() => navigation.navigate(routes.FAVORITE)}
          iconRight01={Notifications}
          onPressRight01={() => navigation.navigate(routes.NOTIFICATIONS)}
          placeholder="Search Product"
          onPressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
        />
      </View>
    )
  }

  const _renderManFashion = ({ item, index }) => {
    return (
      <Categories
        index={index}
        image={item.image}
        title={item.title}
        vertiColumns
        marginBottom={getSize.m(24)}
      />
    )
  }

  const _renderWomanFashion = ({ item, index }) => {
    return (
      <Categories
        index={index}
        image={item.image}
        title={item.title}
        vertiColumns
        marginBottom={getSize.m(24)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <_renderHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <Titling title="Man Fashion" style={styles.onScroll} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={MAN_FASHION_DATA}
          renderItem={_renderManFashion}
          keyExtractor={(item, index) => item.id.toString()}
        />

        <Titling title="Woman Fashion" />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={WOMAN_FASHION_DATA}
          renderItem={_renderWomanFashion}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </ScrollView>
    </View>
  )
}

export default Explore
