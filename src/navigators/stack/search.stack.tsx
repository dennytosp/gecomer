import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { explore } from '@/screens'
import { RoutesSearchStack } from '../routes'
import { SearchStackParamsList } from '../types'

const Search = createNativeStackNavigator<SearchStackParamsList>()

const SearchStack = () => {
  return (
    <Search.Navigator screenOptions={{ headerShown: false }}>
      <Search.Screen
        name={RoutesSearchStack.SEARCH_PAGE}
        component={explore.SearchPage}
      />
      <Search.Screen
        name={RoutesSearchStack.SEARCH_RESULT}
        component={explore.SearchResults}
      />
      <Search.Screen
        name={RoutesSearchStack.CATEGORY}
        component={explore.Category}
      />
      <Search.Screen
        name={RoutesSearchStack.SOFT_BY}
        component={explore.SoftBy}
      />
      <Search.Screen
        name={RoutesSearchStack.FILTER_SEARCH}
        component={explore.FilterSearch}
      />
    </Search.Navigator>
  )
}

export default SearchStack
