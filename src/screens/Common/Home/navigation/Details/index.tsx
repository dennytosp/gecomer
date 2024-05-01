import { More, Search } from '@/assets'
import { Header } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  View,
} from 'react-native'
import DetailsContent from '../../components/DetailsContent'
import { styles } from './styles'

type Props = {
  route: RouteProp<ParamListBase>
}

const Details = ({ route }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const { item: receive } = route?.params as {
    item: {
      image: ImageSourcePropType
      name: string
      price: string
    }
  }

  const renderImageContent = () => (
    <View style={[styles.wrapperImageContent]}>
      <Pressable style={{ marginBottom: getSize.m(16) }}>
        <Image source={receive?.image} style={[styles.imageProduct]} />
      </Pressable>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        topLine
        numberOfLines={1}
        paddingHorizontal={getSize.m(16)}
        title={receive?.name.slice(0, 20) + '...'}
        rightIconStart={Search}
        rightIconEnd={More}
        onPressRightStart={() => navigation.navigate(routes.SEARCH_PAGE)}
        onPressRightEnd={() => navigation.navigate(routes.ACCOUNT)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        {renderImageContent()}
        <DetailsContent name={receive?.name} price={receive?.price} />
      </ScrollView>
    </View>
  )
}

export default Details
