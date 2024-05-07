import { FormInput, Title } from '@/components'
import React, { useRef } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './price-range.style'

type Props = {
  style?: StyleProp<ViewStyle>
}

const PriceRange = ({ style }: Props) => {
  const rangeStartRef = useRef(null)
  const rangeEndRef = useRef(null)

  return (
    <View style={[styles.wrapperPriceRange, style]}>
      <Title title={'Price Range'} />

      <View style={[styles.rowInput]}>
        <FormInput
          ref={rangeStartRef}
          // title={'Price Range'}
          isRequired={true}
          placeHolder="$1.245"
          inputProps={{ keyboardType: 'numeric', maxLength: 20 }}
          style={[styles.inputRowLeft]}
          containerStyle={[{ marginTop: 0 }]}
        />

        <FormInput
          ref={rangeEndRef}
          isRequired={true}
          placeHolder="$9.355"
          inputProps={{ keyboardType: 'numeric', maxLength: 20 }}
          style={[styles.inputRowRight]}
          containerStyle={[{ marginTop: 0 }]}
        />
      </View>
    </View>
  )
}

export default PriceRange
