export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_COMPANY = "REMOVE_COMPANY";

export interface Company {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export type CompaniesState = Company[];

interface AddTrackedCompany {
  type: typeof ADD_COMPANY;
  company: Company;
}

interface RemoveTrackedCompany {
  type: typeof REMOVE_COMPANY;
  symbol: string;
}

export type CompaniesActionTypes = AddTrackedCompany | RemoveTrackedCompany;
