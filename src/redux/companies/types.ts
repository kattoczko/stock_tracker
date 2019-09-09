export const TEST_TYPE = "TEST_TYPE";

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

export type CompaniesActionTypes = TestAction;
