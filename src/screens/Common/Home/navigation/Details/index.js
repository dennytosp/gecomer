import { More, Search } from '@/assets'
import { Header } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, ScrollView, View } from 'react-native'
import DetailsContent from '../../components/DetailsContent'
import styles from './styles'

const Details = ({ route }) => {
  const navigation = useNavigation()
  const { item: receive } = route?.params

  const renderImageContent = () => (
    <View style={styles.wrapperImageContent}>
      <Pressable style={{ marginBottom: getSize.m(16) }}>
        <Image source={receive?.image} style={styles.imageProduct} />
      </Pressable>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header
        topLine
        numberOfLines={1}
        paddingHorizontal={getSize.m(16)}
        title={receive?.name.slice(0, 20) + '...'}
        iconRight01={Search}
        iconRight02={More}
        onPressRight01={() => navigation.navigate(routes.SEARCH_PAGE)}
        onPressRight02={() => navigation.navigate(routes.ACCOUNT)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        {renderImageContent()}
        <DetailsContent name={receive?.name} price={receive?.price} />
      </ScrollView>
    </View>
  )
}

export default Details
