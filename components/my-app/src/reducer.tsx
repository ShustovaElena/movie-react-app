import { POPULAR_URL } from './constants';
import { IFormCard } from './types';

export interface IGlobalState {
  searchQuery: string;
  userCards: IFormCard[];
  isUserData: boolean;
  sortParam: string;
}

export interface Action {
  type: 'SET_SEARCH' | 'SET_CARDS' | 'SET_IS_USERDATA' | 'SET_SORT_PARAM';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export const reducer: React.Reducer<IGlobalState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'SET_CARDS':
      return { ...state, userCards: action.payload };
    case 'SET_IS_USERDATA':
      return { ...state, isUserData: action.payload };
    case 'SET_SORT_PARAM':
      return { ...state, sortParam: action.payload };

    default:
      return state;
  }
};

export const initialState: IGlobalState = {
  searchQuery: localStorage.getItem('userInput') || '',
  userCards: [],
  isUserData: false,
  sortParam: POPULAR_URL,
};
