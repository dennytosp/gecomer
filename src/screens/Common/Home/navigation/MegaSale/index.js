import { DATA_MEGA_SALE, Search } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const MegaSale = () => {
  const navigation = useNavigation()
  const _renderMegaSale = ({ item, index }) => {
    return (
      <View style={styles.wrapperMegaSale(index)}>
        <ProductsHorizontal
          marginBottom={getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          columns
          onPress={() => navigation.navigate(routes.DETAILS, { item })}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        topLine
        title="Mega Sale"
        iconRight02={Search}
        onPressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA_MEGA_SALE}
        renderItem={_renderMegaSale}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default MegaSale
