import React from 'react';
import {View, Pressable, Image} from 'react-native';
import styles from './styles';
import {Texting} from '../../../../../components';
import {photos} from './../../../../../assets';
import {COLORS, FONTS} from './../../../../../constants';
import {getSize} from '../../../../../utils/reponsive';

const Promotion = ({handleOnpress, marginBottom}) => {
  return (
    <Pressable
      onPress={handleOnpress}
      style={styles.wrapperPromotion(marginBottom)}>
      <Image source={photos.promotion01} style={styles.imagePromotion} />
      <View style={styles.wrapperContentPromotion}>
        <Texting
          title={'Super Flash Sale \n50% Off'}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperTime}>
        <Pressable style={styles.wrapperCardTime}>
          <Texting
            title="08"
            fontSize={getSize.m(16)}
            color={COLORS.secondary}
            fontFamily={FONTS.bold}
          />
        </Pressable>
        <Texting
          title=":"
          marginHorizontal={getSize.m(4)}
          fontSize={getSize.m(16)}
          color={COLORS.white}
          fontFamily={FONTS.bold}
        />
        <Pressable style={styles.wrapperCardTime}>
          <Texting
            title="34"
            fontSize={getSize.m(16)}
            color={COLORS.secondary}
            fontFamily={FONTS.bold}
          />
        </Pressable>
        <Texting
          title=":"
          fontSize={getSize.m(16)}
          color={COLORS.white}
          marginHorizontal={getSize.m(4)}
          fontFamily={FONTS.bold}
        />
        <Pressable style={styles.wrapperCardTime}>
          <Texting
            title="52"
            fontSize={getSize.m(16)}
            color={COLORS.secondary}
            fontFamily={FONTS.bold}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Promotion;
