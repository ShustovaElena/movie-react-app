import { Reducer } from 'react';
import { IFormCard } from './types';

export interface IGlobalState {
  searchQuery: string;
  userCards: IFormCard[];
  isUserData: boolean;
}

export interface Action {
  type: 'SET_SEARCH' | 'SET_CARDS' | 'SET_IS_USERDATA';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export const reducer: React.Reducer<IGlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'SET_CARDS':
      console.log(action.payload);
      return { ...state, userCards: action.payload };
    case 'SET_IS_USERDATA':
      console.log(action.payload);
      return { ...state, isUserData: action.payload };

    default:
      return state;
  }
};

export const initialState: IGlobalState = {
  searchQuery: localStorage.getItem('userInput') || '',
  userCards: [],
  isUserData: false,
};
