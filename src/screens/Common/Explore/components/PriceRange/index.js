import { FormInput, Titling } from '@/components'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const PriceRange = ({ style }) => {
  return (
    <View style={{ ...styles.wrapperPriceRange, ...style }}>
      <Titling title="Price Range" />

      <View style={styles.rowInput}>
        <FormInput
          placeholder="$1.245"
          style={styles.inputRowLeft}
          keyboardType="numeric"
        />
        <FormInput
          placeholder="$9.344"
          style={styles.inputRowRight}
          keyboardType="numeric"
        />
      </View>
    </View>
  )
}

export default PriceRange
