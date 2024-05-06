import { COLORS } from '@/theme'
import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import Text from '../text/text.component'
import { styles } from './title.style'

type Props = {
  title: string
  more?: string
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
  textMoreStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

const Title = (props: Props) => {
  const { title, more, onPress, textStyle, textMoreStyle, style } = props

  return (
    <View style={[styles.wrapperHeaderTitling, style]}>
      <Text title={title} textStyle={[styles.textStyle, textStyle]} />

      {more && (
        <TouchableOpacity onPress={onPress}>
          <Text
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

export default Title
