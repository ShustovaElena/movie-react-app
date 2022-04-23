import { POPULAR_URL } from './constants';
import { IDataApi, IFormCard } from './types';

export interface IGlobalState {
  searchQuery: string;
  userCards: IFormCard[];
  isUserData: boolean;
  sortParam: string;
  dataApi: IDataApi;
  page: number;
  pageCount: number;
}

export interface Action {
  type:
    | 'SET_SEARCH'
    | 'SET_CARDS'
    | 'SET_IS_USERDATA'
    | 'SET_SORT_PARAM'
    | 'SET_DATA_API'
    | 'SET_PAGE'
    | 'SET_PAGE_PARAM';
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
    case 'SET_DATA_API':
      return { ...state, dataApi: action.payload };
    case 'SET_PAGE':
      return { ...state, dataApi: state.dataApi, page: action.payload };
    case 'SET_PAGE_PARAM':
      console.log(action.payload);
      return { ...state, pageCount: action.payload };

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
  pageCount: 20,
};
