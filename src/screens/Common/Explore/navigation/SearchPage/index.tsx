import { DATA_SEARCH, Mic, Remove } from '@/assets'
import { Searching, Texting } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Keyboard, Pressable, View } from 'react-native'
import { styles } from './styles'

const SearchPage = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const [contentSearch, setContentSearch] = useState<string>()

  const renderCenter = ({
    item,
    index,
  }: {
    item: (typeof DATA_SEARCH)[0]
    index: number
  }) => (
    <Pressable
      onPress={() => navigation.navigate(item.navigation)}
      style={[
        styles.wrapperCenter,
        {
          paddingVertical: index === 0 ? getSize.m(0) : getSize.m(16),
          marginBottom: index === 0 ? getSize.m(16) : getSize.m(0),
        },
      ]}
    >
      <Texting title={item.name} />
    </Pressable>
  )

  return (
    <View style={[styles.container]}>
      <Searching
        rightIconStart={Mic}
        rightIconInput={Remove}
        editable
        onChangeText={value => setContentSearch(value)}
        placeholder="Enter your search term"
        onPressRightInput={() => Keyboard.dismiss()}
      />
      <FlatList
        keyboardShouldPersistTaps="never"
        style={[styles.onScroll]}
        showsVerticalScrollIndicator={false}
        data={DATA_SEARCH}
        renderItem={renderCenter}
        keyExtractor={(item, index) => `search-item-${index}`}
      />
    </View>
  )
}

export default SearchPage
