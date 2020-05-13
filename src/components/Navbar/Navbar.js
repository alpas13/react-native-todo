import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Theme} from '../../const';
import {AppTextBold} from '../../ui/AppTextBold/AppTextBold';

export const Navbar = (props) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
      ios: styles.navbarIos,
      android: styles.navbarAndroid
    })}}>
      <AppTextBold style={styles.text}>{props.title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  navbarIos: {
    height: 40,
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 1
  },
  navbarAndroid: {
    height: 60,
    marginTop: 39,
    backgroundColor: Theme.MAIN_COLOR
  },
  text: {
    color: Platform.OS === 'ios' ? Theme.MAIN_COLOR : Theme.WHITE_COLOR,
    fontSize: 20,
  },
});
