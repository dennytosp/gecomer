import { DATA_CART } from '@/assets'
import { ButtonPrimary, Cart, Header, Iteming } from '@/components'
import Texting from '@/components/Texting'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, ScrollView, TextInput, View } from 'react-native'
import styles from './styles'

const Offer = () => {
  const navigation = useNavigation()
  const [count, setCount] = useState(1)
  const [code, setCode] = useState()

  const _renderHeader = ({ item }) => {
    return (
      <Cart
        style={{ marginTop: getSize.m(16) }}
        image={item.image}
        title={item.title}
        price={item.price}
        quantity={item.quantity && count}
        favorited={item.favorite}
        handleDelete={() => navigation.navigate(routes.CONFIRMATION)}
        hanldePlus={() => {
          setCount(count + 1)
        }}
        handleLess={() => {
          count <= 1 ? setCount(1) : setCount(count - 1)
        }}
      />
    )
  }

  const _renderFooter = () => {
    return (
      <Iteming
        left01="Items (3)"
        left02="Shipping"
        left03="Import charges"
        left04="Total Price"
        right01="$598.86"
        right02="$40.00"
        right03="$128.00"
        right04="$766.86"
        colorLeft04={COLORS.secondary}
        fontLef04={FONTS.bold}
        colorRight04={COLORS.primary}
        fontRight04={FONTS.bold}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Your Cart" disableIconLeft topLine />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={_renderHeader}
          keyExtractor={item => item.id.toString()}
        />

        <View style={styles.wrapperCenter}>
          <TextInput
            style={styles.input}
            placeholder="Enter Cupon Code"
            placeholderTextColor={COLORS.grey}
            onChangeText={text => setCode(text)}
          />
          <Pressable style={styles.wrapperButtonApply}>
            <Texting
              title="Apply"
              fontFamily={FONTS.bold}
              color={COLORS.white}
            />
          </Pressable>
        </View>

        <_renderFooter />
        <ButtonPrimary
          title="Check Out"
          marginVertical={getSize.m(16)}
          onPress={() => navigation.navigate(routes.SHIP_TO)}
        />
      </ScrollView>
    </View>
  )
}

export default Offer
