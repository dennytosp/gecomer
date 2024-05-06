import { Delete } from '@/assets'
import Texting from '@/components/text/text.component'
import { getSize } from '@/utils'
import React from 'react'
import {
  Pressable,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './address-item.style'
import ButtonPrimary from '@/components/button-primary/button-primary.component'

type Props = {
  item: { name: string; address: string; phoneNumber: string }
  buttonTitle: string
  handleButton: () => void
  handleDelete: () => void
  style?: StyleProp<ViewStyle>
}

const AddressItem = ({
  item,
  buttonTitle,
  handleButton,
  handleDelete,
  style,
}: Props) => {
  const { name, address, phoneNumber } = item

  return (
    <View style={[styles.wrapperCenter, style]}>
      <Texting title={name} textStyle={[styles.textName]} />
      <Texting title={address} style={[{ marginVertical: getSize.m(16) }]} />
      <Texting title={phoneNumber} style={[{ marginBottom: getSize.m(16) }]} />

      <View style={[styles.wrapperOnEvent]}>
        <ButtonPrimary
          title={buttonTitle}
          onPress={handleButton}
          atBottom={false}
          style={[styles.editButton]}
        />
        <TouchableOpacity onPress={handleDelete} style={[styles.onRemove]}>
          <Delete />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddressItem
