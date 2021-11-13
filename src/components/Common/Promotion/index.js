import React, {useEffect, useState} from 'react';
import {View, Pressable, Image} from 'react-native';
import styles from './styles';
import {Texting} from '../..';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';

const Promotion = ({
  title,
  hours,
  minutes,
  seconds,
  image,
  handleOnpress,
  marginBottom,
  style,
}) => {
  const [count, setCount] = useState(3);
  const [timerCount, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Pressable
      onPress={handleOnpress}
      style={{...styles.wrapperPromotion(marginBottom), ...style}}>
      <Image source={image} style={styles.imagePromotion} />
      <View style={styles.wrapperContentPromotion}>
        <Texting
          title={title}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperTime}>
        <Pressable style={styles.wrapperCardTime}>
          <Texting
            title={hours}
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
            title={minutes}
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
            title={seconds}
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
