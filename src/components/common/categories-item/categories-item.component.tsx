import Texting from '@/components/text/text.component'
import { getSize, width } from '@/utils'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './categories-item.style'

type Props = {
  title: string
  image: () => JSX.Element
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const CategoriesItem = ({ image, title, onPress, style }: Props) => {
  const columnsSize = width / 4 - getSize.m(16 * 2)

  return (
    <View
      style={[
        { width: columnsSize, margin: getSize.m(16) },
        styles.wrapperCategories,
        style,
      ]}
    >
      <View style={{ width: columnsSize }}>
        <Pressable style={[styles.wrapperEventCategories]}>
          <Pressable
            style={[styles.wrapperImageEvent]}
            onPress={() => onPress?.()}
          >
            {image}
          </Pressable>

          <Texting title={title} textStyle={[styles.textTitle]} />
        </Pressable>
      </View>
    </View>
  )
}

export default CategoriesItem
