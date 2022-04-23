import { POPULAR_URL } from './constants';
import { IDataApi, IFormCard } from './types';

export interface IGlobalState {
  searchQuery: string;
  userCards: IFormCard[];
  isUserData: boolean;
  sortParam: string;
  dataApi: IDataApi;
  page: number;
}

export interface Action {
  type:
    | 'SET_SEARCH'
    | 'SET_CARDS'
    | 'SET_IS_USERDATA'
    | 'SET_SORT_PARAM'
    | 'SET_DATA_API'
    | 'SET_PAGE';
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
      // console.log('SET_SORT_PARAM', action.payload);
      return { ...state, sortParam: action.payload };
    case 'SET_DATA_API':
      // console.log('dataApi', action.payload);
      return { ...state, dataApi: action.payload };
    case 'SET_PAGE':
      console.log(action.payload);
      return { ...state, dataApi: action.payload };

    default:
      return state;
  }
};

export const initialState: IGlobalState = {
  searchQuery: localStorage.getItem('userInput') || '',
  userCards: [],
  isUserData: false,
  sortParam: '',
  dataApi: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  },
  page: 1,
};
