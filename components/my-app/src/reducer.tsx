import { initialStateVal } from './constants';
import { IGlobalState, Action, IFormCard, IDataApi, ICard } from './types';
import { createReducer, createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

// export const reducer: React.Reducer<IGlobalState, Action> = (state, action) => {
//   switch (action.type) {
//     // case 'SET_SEARCH':
//     //   return { ...state, searchQuery: action.payload };
//     case 'SET_CARDS':
//       return { ...state, userCards: action.payload };
//     case 'SET_IS_USERDATA':
//       return { ...state, isUserData: action.payload };
//     case 'SET_SORT_PARAM':
//       return { ...state, sortParam: action.payload };
//     case 'SET_DATA_API':
//       return { ...state, dataApi: action.payload };
//     case 'SET_PAGE':
//       return { ...state, dataApi: state.dataApi, page: action.payload };
//     case 'SET_PAGE_PARAM':
//       return { ...state, pageCount: action.payload };
//     case 'SET_USER_SELECT':
//       return { ...state, userSelect: action.payload };

//     default:
//       return state;
//   }
// };

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
  userSelect: initialStateVal,
};

// export interface SearchState {
//   value: string;
// }

// const initialState: SearchState = {
//   value: localStorage.getItem('userInput') || '',
// };

// const setSearch = createAction<string>('setSearch');
// const setCards = createAction<IFormCard[]>('setCards');
// const setIsUserData = createAction<boolean>('setIsUserData');
// const setSortParam = createAction<string>('setIsUserData');
// const setDataApi = createAction<IDataApi>('setIsUserData');
// const setPage = createAction<number>('setIsUserData');
// const setPageCount = createAction<number>('setIsUserData');
// const setUserSelect = createAction<ICard>('setIsUserData');

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCards: (state, action) => {
      state.userCards.push(action.payload);
    },
    setIsUserData: (state, action) => {
      state.isUserData = action.payload;
    },
    setSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    setDataApi: (state, action) => {
      state.dataApi = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    setUserSelect: (state, action) => {
      state.userSelect = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(setSearch, (state, action) => {
  //       state.searchQuery = action.payload;
  //     })
  //     .addCase(setCards, (state, action) => {
  //       state.userCards = action.payload;
  //     })
  //     .addCase(setIsUserData, (state, action) => {
  //       state.isUserData = action.payload;
  //     })
  //     .addCase(setSortParam, (state, action) => {
  //       state.sortParam = action.payload;
  //     })
  //     .addCase(setDataApi, (state, action) => {
  //       state.dataApi = action.payload;
  //     })
  //     .addCase(setPage, (state, action) => {
  //       state.page = action.payload;
  //     })
  //     .addCase(setPageCount, (state, action) => {
  //       state.pageCount = action.payload;
  //     })
  //     .addCase(setUserSelect, (state, action) => {
  //       state.userSelect = action.payload;
  //     })
  //     .addDefaultCase((state) => {
  //       return state;
  //     });
  // },
});

export const {
  setSearch,
  setCards,
  setDataApi,
  setIsUserData,
  setPage,
  setPageCount,
  setSortParam,
  setUserSelect,
} = homeSlice.actions;

export default homeSlice.reducer;
