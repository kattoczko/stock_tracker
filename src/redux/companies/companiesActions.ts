import {
  ADD_COMPANY,
  REMOVE_COMPANY,
  CompaniesActionTypes,
  Company
} from "./types";

export function addTrackedCompany(company: Company): CompaniesActionTypes {
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
