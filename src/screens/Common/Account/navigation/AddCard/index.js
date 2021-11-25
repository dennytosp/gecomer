import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {ButtonPrimary, Header} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';
import FormCard from '../../components/FormCard';

const AddCard = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();
  const [cardHolder, setCardHolder] = useState();

  return (
    <View style={styles.container}>
      <Header title="Add Card" topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <FormCard
          CardNumber={[cardNumber, setCardNumber]}
          ExpirationDate={[expirationDate, setExpirationDate]}
          SecurityCode={[securityCode, setSecurityCode]}
          CardHolder={[cardHolder, setCardHolder]}
        />
      </ScrollView>
      <ButtonPrimary
        title="Add Card"
        marginVertical={getSize.m(16)}
        handleOnpress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AddCard;
