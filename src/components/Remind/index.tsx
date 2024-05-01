import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { ColorValue, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import ButtonPrimary from '../ButtonPrimary'
import Texting from '../Texting'
import { styles } from './styles'

type Props = {
  icon: () => JSX.Element
  background?: ColorValue | undefined
  title: string
  subtitle: string
  eventTitle: string
  cancelTitle?: string
  justAlign?: boolean
  handleOnEvent?: () => void
  handleOnCancel?: () => void
  style?: StyleProp<ViewStyle>
}

const Remind = ({
  icon,
  background,
  title,
  subtitle,
  eventTitle,
  cancelTitle,
  justAlign,
  handleOnEvent,
  handleOnCancel,
  style,
}: Props) => {
  return (
    <View
      style={[
        styles.wrapperEmpty,
        { marginTop: justAlign ? null : getSize.m(132) },
        style,
      ]}
    >
      <View style={[styles.wrapperContentEmpty]}>
        <Pressable
          style={[
            { backgroundColor: background ?? COLORS.primary },
            styles.wrapperImageTitle,
          ]}
        >
          {icon}
        </Pressable>

        <Texting
          title={title}
          textStyle={[styles.textTitle]}
          style={[{ marginTop: getSize.m(16) }]}
        />
        <Texting title={subtitle} style={[{ marginBottom: getSize.m(16) }]} />
      </View>

      <ButtonPrimary
        title={eventTitle}
        onPress={handleOnEvent}
        style={[{ marginBottom: getSize.m(16) }]}
      />

      {cancelTitle && (
        <Pressable onPress={handleOnCancel} style={[styles.wrapperCancel]}>
          <Texting title={cancelTitle} textStyle={[styles.textCancel]} />
        </Pressable>
      )}
    </View>
  )
}

export default Remind
