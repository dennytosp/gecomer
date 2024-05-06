import React from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Delete } from '@/assets'
import Text from '@/components/text/text.component'
import ButtonPrimary from '@/components/button-primary/button-primary.component'
import { getSize } from '@/utils'
import { styles } from './address-item.style'

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
      <Text title={name} textStyle={[styles.textName]} />
      <Text title={address} style={[{ marginVertical: getSize.m(16) }]} />
      <Text title={phoneNumber} style={[{ marginBottom: getSize.m(16) }]} />

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
