import {
  TEST_TYPE,
  ADD_COMPANY,
  REMOVE_COMPANY,
  CompaniesActionTypes
} from "./types";

export function testAction(data: []): CompaniesActionTypes {
  return {
    type: TEST_TYPE,
    data
  };
}

export function addTrackedCompany(company: {}): CompaniesActionTypes {
  return {
    type: ADD_COMPANY,
    company
  };
}

export function removeTrackedCompany(symbol: string): CompaniesActionTypes {
  return {
    type: REMOVE_COMPANY,
    symbol
  };
}
