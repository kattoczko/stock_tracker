import { TEST_TYPE, CompaniesActionTypes, CompaniesState } from "./types";

const initialState: any[] = [];

export default function companiesReducer(
  state = initialState,
  action: CompaniesActionTypes
): CompaniesState {
  switch (action.type) {
    case TEST_TYPE:
      return state;
    default:
      return state;
  }
}
