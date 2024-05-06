import { COLORS } from '@/theme'
import { getSize } from '@/utils'
import React from 'react'
import { ColorValue, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import ButtonPrimary from '../button-primary/button-primary.component'
import Text from '../text/text.component'
import { styles } from './remind.style'

type Props = {
  icon: () => JSX.Element
  background?: ColorValue | undefined
  title: string
  subtitle: string
  eventTitle: string
  cancelTitle?: string
  isAlign?: boolean
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
  isAlign = true,
  handleOnEvent,
  handleOnCancel,
  style,
}: Props) => {
  return (
    <View
      style={[
        styles.wrapperEmpty,
        !isAlign && { marginTop: getSize.m(160) },
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

        <Text
          title={title}
          textStyle={[styles.textTitle]}
          style={[{ marginTop: getSize.m(16) }]}
        />
        <Text title={subtitle} style={[{ marginBottom: getSize.m(16) }]} />
      </View>

      <ButtonPrimary
        title={eventTitle}
        onPress={handleOnEvent}
        atBottom={false}
      />

      {cancelTitle && (
        <ButtonPrimary
          title={cancelTitle}
          onPress={handleOnCancel}
          outline={true}
          atBottom={false}
        />
      )}
    </View>
  )
}

export default Remind
