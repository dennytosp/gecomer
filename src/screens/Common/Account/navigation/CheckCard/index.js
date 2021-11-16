import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  CardATM,
  FormInput,
  Header,
  Titling,
} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';
import {Method01} from '../../../../../assets/svg';

const CheckCard = () => {
  const navigation = useNavigation();

  const _renderCard = () => {
    return (
      <CardATM
        style={styles.wrapperCard}
        method={Method01}
        code="6326    9124    8124    9875"
        holder="DINH TIEN PHONG"
        time="12/2028"
      />
    );
  };
  const _renderInputCard = () => {
    return (
      <View style={styles.wrapperContent}>
        <Titling title="Card Number" />
        <FormInput placeholder="Enter Card Number" keyboardType="number-pad" />
        <View style={styles.rowInput}>
          <View>
            <Titling title="Expiration Date" />
            <FormInput
              placeholder="Expiration Date"
              keyboardType="numeric"
              style={styles.inputRowLeft}
            />
          </View>

          <View>
            <Titling title="Security Code" textAlign="left" />
            <FormInput
              placeholder="Security Code"
              style={styles.inputRowRight}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <Titling title="Card Holder" marginTop={getSize.m(24)} />
        <FormInput placeholder="Enter Card Number" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Lailyfa Febrina Card" topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <_renderCard />
        <_renderInputCard />
      </ScrollView>

      <ButtonPrimary
        title="Save"
        marginVertical={getSize.m(16)}
        handleOnpress={() => navigation.goBack()}
      />
    </View>
  );
};

export default CheckCard;
