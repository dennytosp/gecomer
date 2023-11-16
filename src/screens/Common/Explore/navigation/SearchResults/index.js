import {
  DownPress,
  Filterist,
  PRODUCTS_DATA_VERTICOLUMNS,
  RemoveEmpty,
  Soft,
} from '@/assets'
import { ProductsHorizontal, Remind, Searching, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styles } from './styles'

const SearchResults = () => {
  const navigation = useNavigation()
  const numColumns = 2
  const emptyLength = [].length + ' Result'
  const countLength = PRODUCTS_DATA_VERTICOLUMNS.length + ' Result'
  const [show, setShow] = useState(true)
  const [value, setValue] = useState('Nike Air Max')

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <Pressable onPress={() => setShow(!show)}>
          <Texting
            title={show ? countLength : emptyLength}
            textStyle={[{ fontFamily: FONTS.bold }]}
          />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate(routes.CATEGORY)}
          style={styles.wrapperRightRows}
        >
          <Texting
            title="Man Shoes"
            textStyle={[{ fontFamily: FONTS.bold, color: COLORS.secondary }]}
            style={[{ marginRight: getSize.m(4) }]}
          />

          <Pressable onPress={() => navigation.navigate(routes.CATEGORY)}>
            <DownPress />
          </Pressable>
        </Pressable>
      </View>
    )
  }

  const _renderProducts = ({ item }) => {
    return (
      <View style={styles.wrapperProducts}>
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

  const _renderEmpty = () => {
    return (
      <Remind
        icon={RemoveEmpty}
        title="Product Not Found"
        subtitle="Thank you for shopping using Gecomer"
        onEvent="Back to Home"
        handleOnEvent={() => navigation.navigate(routes.COMMON)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Searching
        iconRight={Soft}
        iconRight01={Filterist}
        onPressRight={() => navigation.navigate(routes.SOFT_BY)}
        onPressRight01={() => navigation.navigate(routes.FILTER_SEARCH)}
        editable
        onChangeText={text => setValue(text)}
        value={value}
      />
      <_renderCenter />
      {show ? (
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        _renderEmpty()
      )}
    </View>
  )
}

export default SearchResults
