import React, {useState} from 'react';
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
import FormCarding from '../../components/FormCarding';

const CheckCard = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();
  const [cardHolder, setCardHolder] = useState();

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

  return (
    <View style={styles.container}>
      <Header title="Lailyfa Febrina Card" topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <_renderCard />
        <FormCarding
          CardNumber={[cardNumber, setCardNumber]}
          ExpirationDate={[expirationDate, setExpirationDate]}
          SecurityCode={[securityCode, setSecurityCode]}
          CardHolder={[cardHolder, setCardHolder]}
        />
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
