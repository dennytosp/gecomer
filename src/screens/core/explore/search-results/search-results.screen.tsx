import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  DownPress,
  Filterist,
  PRODUCTS_DATA_VERTICOLUMNS,
  RemoveEmpty,
  Soft,
} from '@/assets'
import { ProductItem, Remind, SearchBar, Text } from '@/components'
import { RoutesMainStack, RoutesSearchStack } from '@/navigators/routes'
import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { styles } from './search-results.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.SEARCH_STACK>

const SearchResults = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const numColumns = 2
  const emptyLength = [].length + ' Result'
  const countLength = PRODUCTS_DATA_VERTICOLUMNS.length + ' Result'
  const [show, setShow] = useState(true)
  const [value, setValue] = useState('Nike Air Max')

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <Pressable onPress={() => setShow(!show)}>
        <Text
          title={show ? countLength : emptyLength}
          textStyle={[{ fontFamily: FONTS.bold }]}
        />
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.CATEGORY,
          })
        }
        style={[styles.wrapperRightRows]}
      >
        <Text
          title="Man Shoes"
          textStyle={[{ fontFamily: FONTS.bold, color: COLORS.secondary }]}
          style={[{ marginRight: getSize.m(4) }]}
        />

        <Pressable
          onPress={() =>
            navigation.navigate(RoutesMainStack.SEARCH_STACK, {
              screen: RoutesSearchStack.CATEGORY,
            })
          }
        >
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
    />
  )

  const renderEmpty = () => (
    <Remind
      icon={RemoveEmpty}
      title="Product Not Found"
      subtitle="Thank you for shopping using Gecomer"
      eventTitle="Back to Home"
      handleOnEvent={() => navigation.navigate(RoutesMainStack.TAB_STACK)}
      isAlign={false}
    />
  )

  return (
    <View style={[styles.container]}>
      <SearchBar
        rightIcon={Soft}
        rightIconStart={Filterist}
        onPressRight={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.SOFT_BY,
          })
        }
        onPressRightStart={() =>
          navigation.navigate(RoutesMainStack.SEARCH_STACK, {
            screen: RoutesSearchStack.FILTER_SEARCH,
          })
        }
        onChangeText={text => setValue(text)}
        value={value}
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
