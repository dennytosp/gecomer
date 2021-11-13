import React from 'react';
import {View, ScrollView, Pressable, Image} from 'react-native';
import styles from './styles';
import {Header} from '../../../../../components';
import {More, Search} from '../../../../../assets/svg';
import {photos} from '../../../../../assets';
import {getSize} from '../../../../../utils/reponsive';
import DetailsContent from '../../components/DetailsContent';

const Details = () => {
  const _renderImageContent = ({item}) => {
    return (
      <View style={styles.wrapperImageContent}>
        <Pressable style={{marginBottom: getSize.m(16)}}>
          <Image source={photos.product03} style={styles.imageProduct} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        topline
        paddingHorizontal={getSize.m(16)}
        title="Nike Air Max 270 Rea..."
        iconRight01={Search}
        iconRight02={More}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <_renderImageContent />
        <DetailsContent />
      </ScrollView>
    </View>
  );
};

export default Details;
