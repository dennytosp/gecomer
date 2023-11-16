import { COLORS } from '@/constants'
import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import Texting from '../Texting'
import { styles } from './styles'

type Props = {
  title: string
  more?: string
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
  textMoreStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

const Titling = (props: Props) => {
  const { title, more, onPress, textStyle, textMoreStyle, style } = props

  return (
    <View style={[styles.wrapperHeaderTitling, style]}>
      <Texting title={title} textStyle={[styles.textStyle, textStyle]} />

      {more && (
        <Texting
          title={more}
          onPress={onPress}
          textStyle={[
            styles.textStyle,
            { color: COLORS.primary },
            textMoreStyle,
          ]}
        />
      )}
    </View>
  )
}

export default Titling
