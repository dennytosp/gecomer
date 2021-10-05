import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {ONBOARD_DATA} from '../../../assets/data';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { routes } from '../../../navigation/routes';

const Onboard = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={{marginTop: top + 125, ...styles.image}}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#EAD6EE', '#A0F1EA']}
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Go</Text>
      </LinearGradient>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Back</Text>
      </View>
    );
  };

  const handleDone = () => {
    navigation.navigate(routes.COMMON);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={ONBOARD_DATA}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

export default Onboard;
