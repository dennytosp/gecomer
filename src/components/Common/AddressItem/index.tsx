import { Delete } from '@/assets'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type Props = {
  name: string
  address: string
  phoneNumber: string
  buttonTitle: string
  handleButton: () => void
  handleDelete: () => void
  style?: StyleProp<ViewStyle>
}

const AddressItem = ({
  name,
  address,
  phoneNumber,
  buttonTitle,
  handleButton,
  handleDelete,
  style,
}: Props) => {
  return (
    <View style={[styles.wrapperCenter, style]}>
      <Texting title={name} textStyle={[styles.textName]} />
      <Texting title={address} style={[{ marginVertical: getSize.m(16) }]} />
      <Texting title={phoneNumber} style={[{ marginBottom: getSize.m(16) }]} />

      <View style={[styles.wrapperOnEvent]}>
        <Pressable style={[styles.onEdit]} onPress={handleButton}>
          <Texting title={buttonTitle} textStyle={[styles.textEdit]} />
        </Pressable>

        <Pressable onPress={handleDelete} style={[styles.onRemove]}>
          <Delete />
        </Pressable>
      </View>
    </View>
  )
}

export default AddressItem
