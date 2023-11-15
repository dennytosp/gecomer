import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'
import { ButtonPrimary, CardATM } from '@/components'
import { Header } from '@/components'
import { Add_Ship, Method01 } from '@/assets/index'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'

const Card = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header
        title="Choose Card"
        iconRight02={Add_Ship}
        onPressRight02={() => navigation.navigate(routes.ADD_CARD)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CardATM
          method={Method01}
          code="6326    9124    8124    9875"
          holder="DINH TIEN PHONG"
          time="12/2028"
        />
      </ScrollView>
      <ButtonPrimary
        title="Pay $766.86"
        marginBottom={getSize.m(16)}
        onPress={() => navigation.navigate(routes.PURCHASE_SUCCESS)}
      />
    </View>
  )
}

export default Card
