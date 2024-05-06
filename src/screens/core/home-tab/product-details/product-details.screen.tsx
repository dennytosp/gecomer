import { More, Search } from '@/assets'
import { ButtonPrimary, Header } from '@/components'
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
import DetailsContent from '../components/details-content/details-content.component'
import { styles } from './product-details.style'

type Props = {
  route: RouteProp<ParamListBase>
}

const Details = ({ route }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const { item: receive } = route?.params as {
    item: {
      image: ImageSourcePropType
      name: string
      discounted: string
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
        keyboardDismissMode="on-drag"
      >
        {renderImageContent()}
        <DetailsContent name={receive?.name} price={receive?.discounted} />
      </ScrollView>

      <ButtonPrimary
        title="Add To Cart"
        onPress={() => navigation.navigate(routes.CART)}
        style={[{ marginTop: getSize.m(16), marginHorizontal: getSize.m(16) }]}
      />
    </View>
  )
}

export default Details
