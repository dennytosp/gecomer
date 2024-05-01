import { DATA_MEGA_SALE, Search } from '@/assets'
import { Header, ProductsHorizontal } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const MegaSale = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2

  const renderMegaSale = ({
    item,
    index,
  }: {
    item: (typeof DATA_MEGA_SALE)[0]
    index: number
  }) => (
    <View
      style={[
        styles.wrapperMegaSale,
        { marginTop: index <= 1 ? getSize.m(16) : getSize.m(0) },
      ]}
    >
      <ProductsHorizontal
        marginBottom={getSize.m(12)}
        image={item.image}
        name={item.name}
        discounted={item.discounted}
        price={item.price}
        promotion={item.promotion}
        columns={numColumns}
        onPress={() => navigation.navigate(routes.DETAILS, { item })}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        title="Mega Sale"
        rightIconEnd={Search}
        onPressRightEnd={() => navigation.navigate(routes.SEARCH_PAGE)}
      />

      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={[styles.columnWrapperStyle]}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        data={DATA_MEGA_SALE}
        renderItem={renderMegaSale}
        keyExtractor={(item, index) => `mega-prod${index}`}
      />
    </View>
  )
}

export default MegaSale
