import { initialStateVal, BASE_URL, DISCOVER_URL } from './constants';
import { IGlobalState } from './types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'home/fetchData',
  async (params: { searchQuery: string; page: number; sortParam: string }) => {
    const url = `${BASE_URL}&query=${params.searchQuery}&page=${params.page}`;
    const sortUrl = params.sortParam
      ? `${DISCOVER_URL}&page=${params.page}&sort_by=${params.sortParam}`
      : `${DISCOVER_URL}&page=${params.page}`;
    const res = await fetch(params.searchQuery ? url : sortUrl);
    const data = await res.json();
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.dataApi = action.payload;
    });
  },
});

export const {
  setSearch,
  setCards,
  setIsUserData,
  setPage,
  setPageCount,
  setSortParam,
  setUserSelect,
} = homeSlice.actions;

export default homeSlice.reducer;
