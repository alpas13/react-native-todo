import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../../const';

export const AppCard = (props) => {
  return <View style={{...styles.default, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.WHITE_COLOR,
    shadowColor: Theme.BLACK_COLOR,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 8,
    borderRadius: 10,
  },
});
