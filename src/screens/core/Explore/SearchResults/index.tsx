import {
  DownPress,
  Filterist,
  PRODUCTS_DATA_VERTICOLUMNS,
  RemoveEmpty,
  Soft,
} from '@/assets'
import { ProductItem, Remind, Searching, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styles } from './styles'

const SearchResults = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const numColumns = 2
  const emptyLength = [].length + ' Result'
  const countLength = PRODUCTS_DATA_VERTICOLUMNS.length + ' Result'
  const [show, setShow] = useState(true)
  const [value, setValue] = useState('Nike Air Max')

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <Pressable onPress={() => setShow(!show)}>
        <Texting
          title={show ? countLength : emptyLength}
          textStyle={[{ fontFamily: FONTS.bold }]}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(routes.CATEGORY)}
        style={[styles.wrapperRightRows]}>
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

  const renderProducts = ({
    item,
  }: {
    item: (typeof PRODUCTS_DATA_VERTICOLUMNS)[0]
  }) => (
    <ProductItem
      marginBottom={getSize.m(12)}
      item={item}
      columns={numColumns}
      onPress={() => navigation.navigate(routes.DETAILS, { item })}
    />
  )

  const renderEmpty = () => (
    <Remind
      icon={RemoveEmpty}
      title="Product Not Found"
      subtitle="Thank you for shopping using Gecomer"
      eventTitle="Back to Home"
      handleOnEvent={() => navigation.navigate(routes.COMMON)}
      isAlign={false}
    />
  )

  return (
    <View style={[styles.container]}>
      <Searching
        rightIcon={Soft}
        rightIconStart={Filterist}
        onPressRight={() => navigation.navigate(routes.SOFT_BY)}
        onPressRightStart={() => navigation.navigate(routes.FILTER_SEARCH)}
        onChangeText={text => setValue(text)}
        value={value}
        editable={true}
      />

      {renderCenter()}

      {show ? (
        <FlatList
          columnWrapperStyle={[styles.columnWrapperStyle]}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={renderProducts}
          keyExtractor={(item, index) => `search-result-${index}`}
        />
      ) : (
        renderEmpty()
      )}
    </View>
  )
}

export default SearchResults
