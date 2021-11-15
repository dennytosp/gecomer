import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Texting} from '../../../../../components';
import {DATA_SOFT_BY} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {FONTS} from '../../../../../constants';

const SoftBy = () => {
  const _renderCenter = ({item}) => {
    return (
      <View
        style={{
          ...styles.wrapperCenter,
          backgroundColor: item.backgroundColor,
        }}>
        <Texting
          marginHorizontal={getSize.m(16)}
          title={item.title}
          fontFamily={FONTS.bold}
          paddingVertical={getSize.m(16)}
          color={item.colors}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Soft By" paddingHorizontal={getSize.m(16)} topline />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_SOFT_BY}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default SoftBy;
