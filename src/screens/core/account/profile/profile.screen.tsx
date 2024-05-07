import React from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DATA_PROFILE, Editing, ForwardNext, photos } from '@/assets'
import { Header, Text } from '@/components'
import { RoutesAccountStack, RoutesMainStack } from '@/navigators/routes'
import picker from '@/utils/picker'
import { styles } from './profile.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.ACCOUNT_STACK>

const Profile = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const { openPicker, picture } = picker()

  const renderHeader = () => (
    <View style={[styles.wrapperHeader]}>
      <Pressable style={[styles.wrapperHeaderAvatar]}>
        <Pressable onPress={openPicker} style={[styles.borderAvatar]}>
          <Image
            source={picture ? { uri: picture.uri } : photos.avatar}
            style={[styles.avatar]}
          />
        </Pressable>

        <View style={[styles.rightAvatar]}>
          <Text title="Gin Phone" textStyle={[styles.textPhone]} />
          <Text title="@ginphone" />
        </View>
      </Pressable>
    </View>
  )

  const renderCenter = ({ item }: { item: (typeof DATA_PROFILE)[0] }) => (
    <View style={[styles.wrapperCenter]}>
      <View style={[styles.leftCenter]}>
        <Pressable>{item.icon({})}</Pressable>
        <Text
          title={item.title}
          style={[styles.wrapTextTitle]}
          textStyle={[styles.textTitle]}
        />
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate(RoutesMainStack.ACCOUNT_STACK, {
            screen: item.navigation,
          })
        }
        style={[styles.rightCenter]}
      >
        <Text
          title={item.content}
          textStyle={[styles.textContent]}
          style={[styles.wrapperCenter]}
        />
        <ForwardNext />
      </Pressable>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        title="Profile"
        topLine
        rightIconEnd={Editing}
        onPressRightEnd={() =>
          navigation.navigate(RoutesMainStack.ACCOUNT_STACK, {
            screen: RoutesAccountStack.EDIT_PROFILE,
          })
        }
      />

      {renderHeader()}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PROFILE}
        renderItem={renderCenter}
        keyExtractor={(item, index) => `profile-${index}`}
      />
    </View>
  )
}

export default Profile
