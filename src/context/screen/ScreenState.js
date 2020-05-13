import React, {useReducer} from 'react';
import {ScreenContext} from './screenContext';
import {screenReducer} from './screenReducer';
import {ActionType} from '../../const';

export const ScreenState = ({children}) => {
  const [state, dispatch] = useReducer(screenReducer, null);
  const changeScreen = (id) =>
    dispatch({type: ActionType.CHANGE_SCREEN, payload: id});

  return (
    <ScreenContext.Provider value={{todoId: state, changeScreen}}>
      {children}
    </ScreenContext.Provider>
  );
};
