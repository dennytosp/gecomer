import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Texting} from '../../../../../components';
import {DATA_SOFT_BY} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';

const SoftBy = () => {
  const _renderCenter = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.wrapperCenter,
          marginTop: index === 0 ? getSize.m(0) : getSize.m(10),
        }}>
        <Texting
          marginHorizontal={getSize.m(16)}
          title={item.title}
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Soft By" paddingHorizontal={getSize.m(16)} />
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
