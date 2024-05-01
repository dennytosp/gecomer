import { Remove } from '@/assets'
import { Header } from '@/components'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Condition, PriceRange } from '../components'
import { styles } from './styles'

const FilterSearch = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <View style={[styles.container]}>
      <Header topLine title="Filter Search" leftIcon={Remove} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <PriceRange />
        <Condition />
      </ScrollView>
    </View>
  )
}

export default FilterSearch
