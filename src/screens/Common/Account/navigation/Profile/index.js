import React from 'react';
import {Pressable, View, Image, FlatList} from 'react-native';
import styles from './styles';
import {Header, Texting} from '../../../../../components';
import {Editing, ForwardNext} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {photos} from '../../../../../assets';
import {COLORS, FONTS} from '../../../../../constants';
import {getSize, width} from '../../../../../utils/reponsive';
import {DATA_PROFILE} from '../../../../../assets/data';
import picker from '../../../../../utils/picker';

const Profile = () => {
  const navigation = useNavigation();
  const {openPicker, picture} = picker();

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Pressable style={styles.wrapperHeaderAvatar}>
          <Pressable onPress={openPicker} style={styles.borderAvatar}>
            <Image
              source={picture ? {uri: picture.uri} : photos.not_avt}
              style={styles.avatar}
            />
          </Pressable>
          <View style={styles.rightAvatar}>
            <Texting
              title="Gin Phone"
              color={COLORS.secondary}
              fontFamily={FONTS.bold}
              fontSize={getSize.m(14)}
            />
            <Texting title="@ginphone" />
          </View>
        </Pressable>
      </View>
    );
  };

  const _renderCenter = ({item}) => {
    return (
      <View style={styles.wrapperCenter}>
        <View style={styles.leftCenter}>
          <Pressable>{item.icon}</Pressable>
          <Texting
            title={item.title}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(12)}
            marginLeft={getSize.m(12)}
            color={COLORS.secondary}
            paddingVertical={getSize.m(16)}
            width={width / 2 - getSize.m(60)}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate(item.navigation)}
          style={styles.rightCenter}>
          <Texting
            title={item.content}
            width={width / 2 - getSize.m(48)}
            textAlign="right"
            marginRight={getSize.m(12)}
          />
          <ForwardNext />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Profile"
        topline
        iconRight02={Editing}
        handleOnpressRight02={() =>
          navigation.navigate(routes.EDIT_USER_INFORMATION)
        }
      />
      <_renderHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PROFILE}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Profile;
