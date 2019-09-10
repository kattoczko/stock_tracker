export const TEST_TYPE = "TEST_TYPE";
export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_COMPANY = "REMOVE_COMPANY";

export interface Company {
  id: string;
  name: string;
  done: string[];
}

export type CompaniesState = Company[];

interface TestAction {
  type: typeof TEST_TYPE;
  data: [];
}

interface AddTrackedCompany {
  type: typeof ADD_COMPANY;
  company: {};
}

interface RemoveTrackedCompany {
  type: typeof REMOVE_COMPANY;
  symbol: string;
}

export type CompaniesActionTypes =
  | TestAction
  | AddTrackedCompany
  | RemoveTrackedCompany;
