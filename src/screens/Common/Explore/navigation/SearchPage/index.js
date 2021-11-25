import React, {useState} from 'react';
import {View, FlatList, ScrollView, Pressable, Keyboard} from 'react-native';
import styles from './styles';
import {Searching, Texting} from '../../../../../components';
import {DATA_SEARCH} from '../../../../../assets/data';
import {Mic, Remove} from '../../../../../assets/svg';
import {getSize} from '../../../../../utils/reponsive';
import {useNavigation} from '@react-navigation/core';

const SearchPage = () => {
  const navigation = useNavigation();
  const [contentSearch, setContentSearch] = useState();

  const _renderCenter = ({item, index}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(item.navigation)}
        style={{
          ...styles.wrapperCenter,
          paddingVertical: index === 0 ? getSize.m(0) : getSize.m(16),
          marginBottom: index === 0 ? getSize.m(16) : getSize.m(0),
        }}>
        <Texting title={item.name} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Searching
        iconRight01={Mic}
        iconRightInput={Remove}
        editable
        onChangeText={value => setContentSearch(value)}
        placeholder="Enter your search term"
        handleOnpressRightInput={() => Keyboard.dismiss()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <FlatList
          style={styles.onScroll}
          showsVerticalScrollIndicator={false}
          data={DATA_SEARCH}
          renderItem={_renderCenter}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default SearchPage;
