import React, { Dispatch, useReducer } from 'react';
import { reducer, initialState, IGlobalState, Action } from './reducer';
import { IFormCard } from './types';

export type GlobalContent = {
  state: IGlobalState;
  dispatch: Dispatch<Action>;
};

export const AppContext = React.createContext<GlobalContent>({
  state: initialState,
  dispatch: ({}) => {},
});

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
