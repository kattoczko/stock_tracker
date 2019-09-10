import {
  ADD_COMPANY,
  REMOVE_COMPANY,
  CompaniesActionTypes,
  CompaniesState
} from "./types";

const initialState: any[] = [];

export default function companiesReducer(
  state = initialState,
  action: CompaniesActionTypes
): CompaniesState {
  switch (action.type) {
    case ADD_COMPANY:
      if (state.some(company => company.symbol === action.company.symbol)) {
        return state;
      } else {
        return [...state, { ...action.company }];
      }
    case REMOVE_COMPANY:
      return state.filter(company => company.symbol !== action.symbol);
    default:
      return state;
  }
}
