import { DATA_PROFILE, Editing, ForwardNext, photos } from '@/assets'
import { Header, Texting } from '@/components'
import { routes } from '@/navigation/routes'
import picker from '@/utils/picker'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const Profile = () => {
  const navigation = useNavigation()
  const { openPicker, picture } = picker()

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Pressable style={styles.wrapperHeaderAvatar}>
          <Pressable onPress={openPicker} style={styles.borderAvatar}>
            <Image
              source={picture ? { uri: picture.uri } : photos.not_avt}
              style={styles.avatar}
            />
          </Pressable>

          <View style={styles.rightAvatar}>
            <Texting title="Gin Phone" textStyle={[styles.textPhone]} />
            <Texting title="@ginphone" />
          </View>
        </Pressable>
      </View>
    )
  }

  const _renderCenter = ({ item }) => {
    return (
      <View style={styles.wrapperCenter}>
        <View style={styles.leftCenter}>
          <Pressable>{item.icon}</Pressable>
          <Texting
            title={item.title}
            style={[styles.wrapTextTitle]}
            textStyle={[styles.textTitle]}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate(item.navigation)}
          style={styles.rightCenter}
        >
          <Texting
            title={item.content}
            textStyle={[styles.textContent]}
            style={[styles.wrapperCenter]}
          />
          <ForwardNext />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        title="Profile"
        topLine
        iconRight02={Editing}
        onPressRight02={() => navigation.navigate(routes.EDIT_USER_INFORMATION)}
      />
      <_renderHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PROFILE}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Profile
