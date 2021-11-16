import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  FormInput,
  Header,
  Titling,
} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';

const AddCard = () => {
  const navigation = useNavigation();

  const _renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.wrapperContent}>
          <Titling title="Card Number" marginTop={getSize.m(16)} />
          <FormInput
            placeholder="Enter Card Number"
            keyboardType="number-pad"
          />
          <View style={styles.rowInput}>
            <View>
              <Titling title="Expiration Date" />
              <FormInput
                placeholder="Expiration Date"
                style={styles.inputRowLeft}
                keyboardType="number-pad"
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
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Add Card" topline />
      <_renderContent />
      <ButtonPrimary
        title="Add Card"
        marginVertical={getSize.m(16)}
        handleOnpress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AddCard;
