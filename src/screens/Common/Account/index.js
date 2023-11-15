import React from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Header, EventList } from '@/components'
import { DATA_ACCOUNT } from '@/assets'
import { getSize, width } from '@/utils'

const Account = () => {
  const navigation = useNavigation()
  const _renderEvent = ({ item }) => {
    return (
      <View style={styles.wrapperEvent}>
        <EventList
          icon={item.icon}
          title={item.name}
          widthing={width}
          backgroundColor={item.backgroundColor}
          paddingHorizontal={getSize.m(16)}
          onPress={() => navigation.navigate(item.navigation)}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        title="Account"
        disableIconLeft
        topLine
        paddingHorizontal={getSize.m(16)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ACCOUNT}
        renderItem={_renderEvent}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Account
