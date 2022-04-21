import React from 'react';
import { FieldError } from 'react-hook-form';

export type ICard = {
  id: number | undefined;
  title: string | undefined;
  poster_path: string | undefined;
  overview: string | undefined;
  popularity: number | undefined;
  release_date: string | undefined;
  vote_average: number | undefined;
  vote_count: number | undefined;
};

export type IAge = {
  className: string;
  register: object;
  style: object;
  error: string | undefined;
};

export type IFile = {
  className: string;
  register: object;
  style: object;
  error:
    | {
        lastModified?: FieldError | undefined;
        lastModifiedDate?: FieldError | undefined;
        name?: FieldError | undefined;
        size?: FieldError | undefined;
        type?: FieldError | undefined;
        webkitRelativePath?: FieldError | undefined;
      }[]
    | undefined;
};

export type IFormCard = {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: string;
};

export type IName = {
  className: string;
  register: object;
  style: object;
  error: string | undefined;
};

export type ISelect = {
  register: object;
};

export type IStock = {
  register: object;
};

export type IUserInfo = {
  register: object;
};

export type FileType = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export type IUserData = {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: FileType[];
};

export type IStateForm = {
  isDisabled: boolean;
  isUserData: boolean;
  isValidName: boolean;
  isValidAge: boolean;
  isValidFile: boolean;
  isShow: boolean;
  userFormData: IUserData;
  userCards: IUserData[];
  errors: IError;
};

export type IError = {
  name: string;
  date: string;
  file: string;
};

export type IValidationError = {
  textError: string | undefined;
};

export type IStorageProps = {
  userInput: string;
  setDataFromApi: (searchData: ICard[]) => void;
  getDataFromApi: () => Promise<IDataApi>;
  pressSubmit: () => void;
};

export type IStorageState = {
  searchQuery: string;
};

export type ICards = {
  data: ICard[];
};

export type IUserSelect = {
  userSelect: ICard;
  isClosedModul: boolean;
};

export type IModalWinProps = {
  data: ICard;
  onClick: (e: React.FormEvent) => void;
  onClickOverlay: (e: React.FormEvent) => void;
};

export type IHome = {
  data: ICard[];
  isPressSearch: boolean;
};

export type ICardImage = {
  className: string;
  poster_path: string | undefined;
  IMG_URL: string;
  alt: string;
};

export type IDataApi = {
  page: number;
  results: ICard[];
  total_pages: number;
  total_results: number;
};

export type ISort = {
  setDataFromApi: (searchData: ICard[]) => void;
  getDataFromApi: () => Promise<IDataApi>;
};
