import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Texting from '../../../components/Texting';
import styles from './styles';
import {Header, Promotion, RecommendProduct} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width} from '../../../utils/reponsive';
import {routes} from '../../../navigation/routes';
import {photos} from '../../../assets';

const Offer = () => {
  const navigation = useNavigation();

  const _renderPromotionCode = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Texting
          title="Use “MEGSL” Cupon For Get 90% Off"
          fontFamily={FONTS.bold}
          color={COLORS.white}
          fontSize={getSize.m(16)}
          width={width / 2}
        />
      </View>
    );
  };

  const _renderPromotion = () => {
    return (
      <View style={styles.wrapperCenter}>
        <Promotion
          handleOnpress={() => navigation.navigate(routes.SUPER_FLASH_SALE)}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
      </View>
    );
  };

  const _renderRecommend = () => {
    return (
      <View style={styles.wrapperContent}>
        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Offer" disableIconLeft topline />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}>
        <_renderPromotionCode />
        <_renderPromotion />
        <_renderRecommend />
      </ScrollView>
    </View>
  );
};

export default Offer;
