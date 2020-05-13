import React from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import {AppTextBold} from '../AppTextBold/AppTextBold';
import {Theme} from '../../const';

export const AppButton = ({children, onPress, color = Theme.MAIN_COLOR}) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity; 
  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.button, backgroundColor: color}}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Theme.WHITE_COLOR,
  },
});
