import React, {useEffect} from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {Logo} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from './../../../navigation/routes';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.COMMON);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.wrapperLogo}>
        <Logo />
      </Pressable>
    </View>
  );
};

export default Splash;
