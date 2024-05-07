import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SEARCH_SCREEN } from '@/screens'
import { RoutesSearchStack } from '../routes'
import { SearchStackParamsList } from '../types'

const Search = createNativeStackNavigator<SearchStackParamsList>()

const SearchStack = () => {
  return (
    <Search.Navigator screenOptions={{ headerShown: false }}>
      <Search.Screen
        name={RoutesSearchStack.SEARCH_PAGE}
        component={SEARCH_SCREEN.Search}
      />
      <Search.Screen
        name={RoutesSearchStack.SEARCH_RESULT}
        component={SEARCH_SCREEN.SearchResults}
      />
      <Search.Screen
        name={RoutesSearchStack.CATEGORY}
        component={SEARCH_SCREEN.Category}
      />
      <Search.Screen
        name={RoutesSearchStack.SOFT_BY}
        component={SEARCH_SCREEN.SoftBy}
      />
      <Search.Screen
        name={RoutesSearchStack.FILTER_SEARCH}
        component={SEARCH_SCREEN.FilterSearch}
      />
    </Search.Navigator>
  )
}

export default SearchStack
