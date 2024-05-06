import { COLORS } from '@/constants'
import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import Texting from '../text/text.component'
import { styles } from './title.style'

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
        <TouchableOpacity onPress={onPress}>
          <Texting
            title={more}
            textStyle={[
              styles.textStyle,
              { color: COLORS.primary },
              textMoreStyle,
            ]}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Titling
